import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';

export async function POST(request) {
  console.log("Registering user");
  const userData = await request.json();
  const response = CreateUserSchema.safeParse(userData);
  if (!response.success) {
    console.error("Form validation error");
    prisma.$disconnect();
    return new NextResponse(
      JSON.stringify({ response: "error", error: "form validation" })
    );
  }

  // check for duplicate emails
  const emailExists = await prisma.user.findUnique({
    where: {
      email: userData.email.toLowerCase(),
    },
  });

  if (emailExists) {
    prisma.$disconnect();
    return new NextResponse(
      JSON.stringify({
        response: "error",
        error: "Email already exists",
      })
    );
  }

  const hashPassword = await bcrypt.hash(userData.password, 10);
  userData.password = hashPassword;

  const user = await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email.toLowerCase(),
      password: userData.password,
      role: "USER",
      academicNumber: userData.academicNumber,
      graduation: userData.graduation,
      courseYear: userData.courseYear,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });
  prisma.$disconnect();
  return new NextResponse(
    JSON.stringify({ response: "User created Successfully.", user: user })
  );
}