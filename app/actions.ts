'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';


import bcrypt from "bcryptjs";

// READ actions
export async function getUsers() {
  try {
    const users = await prisma.user.findMany({});
    
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Failed to fetch users');
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    
    if (!user) {
      throw new Error('User not found');
    }
    
    return user;
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    throw error;
  }
}

// CREATE actions
export async function createUser({ email, name, password }: { email: string; name: string; password: string }) {
  if (!email) {
    throw new Error('Email is required');
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
    
    // Revalidate the home page to show the new user
    revalidatePath('/');
    
    return user;
  } catch (error: any) {
    // Handle duplicate email error
    if (error.code === 'P2002') {
      throw new Error('A user with this email already exists');
    }
    
    throw new Error('Failed to create user');
  }
}

export async function getGardensByUser(id: string ) {
  try {
    const gardens = await prisma.garden.findMany({
        where:{
            ownerId: id,
        },
        include: {
            plants: true,
        }
    });
    
    return {response:"success",data: gardens};
  } catch (error) {
    console.error('Error fetching gardens:', error);
    throw new Error('Failed to fetch gardens');
  }
}

export async function createGarden({ name, visibility, ownerId }: { name: string; visibility: boolean; ownerId: string }) {
  if (!ownerId) {
    throw new Error('OwnerId is required');
  } else if (!name) {
    throw new Error('Name is required');
  }
  
  try {
    const userExists = await prisma.user.findUnique({
        where: {
            id: ownerId,
        }
    })

    if (!userExists){
        throw new Error('Author not found');
    }

    const garden = await prisma.garden.create({
      data: {
        name,
        visibility,
        owner: {
            connect: {id: ownerId},
        },
      },
    });
    
    // Revalidate the home page to show the new user
    revalidatePath('/');
    
    return garden;
  } catch (error: any) {
    console.log(error)
    // Handle duplicate email error
    
    throw new Error('Failed to create garden');
  }
}

export async function getGardenById(id: string ) {
  try {
    const garden = await prisma.garden.findUnique({
        where:{
            id
        },
        include: {
            plants: true,
        }
    });
    
    return {response:"success",data: garden};
  } catch (error) {
    console.error('Error fetching garden:', error);
    throw new Error('Failed to fetch garden');
  }
}

export async function deleteGarden(id: string ) {
  try {
    const garden = await prisma.garden.delete({
        where:{
            id
        },
    });
    
    return {response:"success"};
  } catch (error) {
    console.error('Error deleting garden:', error);
    throw new Error('Failed to delete garden');
  }
}