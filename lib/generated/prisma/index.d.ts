
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Garden
 * 
 */
export type Garden = $Result.DefaultSelection<Prisma.$GardenPayload>
/**
 * Model Plant
 * 
 */
export type Plant = $Result.DefaultSelection<Prisma.$PlantPayload>
/**
 * Model Atribute
 * 
 */
export type Atribute = $Result.DefaultSelection<Prisma.$AtributePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.garden`: Exposes CRUD operations for the **Garden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gardens
    * const gardens = await prisma.garden.findMany()
    * ```
    */
  get garden(): Prisma.GardenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plant`: Exposes CRUD operations for the **Plant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plants
    * const plants = await prisma.plant.findMany()
    * ```
    */
  get plant(): Prisma.PlantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atribute`: Exposes CRUD operations for the **Atribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atributes
    * const atributes = await prisma.atribute.findMany()
    * ```
    */
  get atribute(): Prisma.AtributeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Garden: 'Garden',
    Plant: 'Plant',
    Atribute: 'Atribute'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "garden" | "plant" | "atribute"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Garden: {
        payload: Prisma.$GardenPayload<ExtArgs>
        fields: Prisma.GardenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GardenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GardenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          findFirst: {
            args: Prisma.GardenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GardenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          findMany: {
            args: Prisma.GardenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>[]
          }
          create: {
            args: Prisma.GardenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          createMany: {
            args: Prisma.GardenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GardenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          update: {
            args: Prisma.GardenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          deleteMany: {
            args: Prisma.GardenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GardenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GardenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          aggregate: {
            args: Prisma.GardenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGarden>
          }
          groupBy: {
            args: Prisma.GardenGroupByArgs<ExtArgs>
            result: $Utils.Optional<GardenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GardenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.GardenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.GardenCountArgs<ExtArgs>
            result: $Utils.Optional<GardenCountAggregateOutputType> | number
          }
        }
      }
      Plant: {
        payload: Prisma.$PlantPayload<ExtArgs>
        fields: Prisma.PlantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          findFirst: {
            args: Prisma.PlantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          findMany: {
            args: Prisma.PlantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>[]
          }
          create: {
            args: Prisma.PlantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          createMany: {
            args: Prisma.PlantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          update: {
            args: Prisma.PlantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          deleteMany: {
            args: Prisma.PlantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlantPayload>
          }
          aggregate: {
            args: Prisma.PlantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlant>
          }
          groupBy: {
            args: Prisma.PlantGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlantGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlantFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlantAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PlantCountArgs<ExtArgs>
            result: $Utils.Optional<PlantCountAggregateOutputType> | number
          }
        }
      }
      Atribute: {
        payload: Prisma.$AtributePayload<ExtArgs>
        fields: Prisma.AtributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload>
          }
          findFirst: {
            args: Prisma.AtributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload>
          }
          findMany: {
            args: Prisma.AtributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload>[]
          }
          create: {
            args: Prisma.AtributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload>
          }
          createMany: {
            args: Prisma.AtributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AtributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload>
          }
          update: {
            args: Prisma.AtributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload>
          }
          deleteMany: {
            args: Prisma.AtributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtributePayload>
          }
          aggregate: {
            args: Prisma.AtributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtribute>
          }
          groupBy: {
            args: Prisma.AtributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtributeGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AtributeFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AtributeAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AtributeCountArgs<ExtArgs>
            result: $Utils.Optional<AtributeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    garden?: GardenOmit
    plant?: PlantOmit
    atribute?: AtributeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gardens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gardens?: boolean | UserCountOutputTypeCountGardensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGardensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GardenWhereInput
  }


  /**
   * Count Type GardenCountOutputType
   */

  export type GardenCountOutputType = {
    plants: number
  }

  export type GardenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plants?: boolean | GardenCountOutputTypeCountPlantsArgs
  }

  // Custom InputTypes
  /**
   * GardenCountOutputType without action
   */
  export type GardenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GardenCountOutputType
     */
    select?: GardenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GardenCountOutputType without action
   */
  export type GardenCountOutputTypeCountPlantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantWhereInput
  }


  /**
   * Count Type PlantCountOutputType
   */

  export type PlantCountOutputType = {
    other: number
  }

  export type PlantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other?: boolean | PlantCountOutputTypeCountOtherArgs
  }

  // Custom InputTypes
  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlantCountOutputType
     */
    select?: PlantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlantCountOutputType without action
   */
  export type PlantCountOutputTypeCountOtherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtributeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    gardens?: boolean | User$gardensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gardens?: boolean | User$gardensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gardens: Prisma.$GardenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gardens<T extends User$gardensArgs<ExtArgs> = {}>(args?: Subset<T, User$gardensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.gardens
   */
  export type User$gardensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    where?: GardenWhereInput
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    cursor?: GardenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GardenScalarFieldEnum | GardenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Garden
   */

  export type AggregateGarden = {
    _count: GardenCountAggregateOutputType | null
    _min: GardenMinAggregateOutputType | null
    _max: GardenMaxAggregateOutputType | null
  }

  export type GardenMinAggregateOutputType = {
    id: string | null
    name: string | null
    visibility: boolean | null
    ownerId: string | null
  }

  export type GardenMaxAggregateOutputType = {
    id: string | null
    name: string | null
    visibility: boolean | null
    ownerId: string | null
  }

  export type GardenCountAggregateOutputType = {
    id: number
    name: number
    visibility: number
    ownerId: number
    _all: number
  }


  export type GardenMinAggregateInputType = {
    id?: true
    name?: true
    visibility?: true
    ownerId?: true
  }

  export type GardenMaxAggregateInputType = {
    id?: true
    name?: true
    visibility?: true
    ownerId?: true
  }

  export type GardenCountAggregateInputType = {
    id?: true
    name?: true
    visibility?: true
    ownerId?: true
    _all?: true
  }

  export type GardenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Garden to aggregate.
     */
    where?: GardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gardens to fetch.
     */
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gardens
    **/
    _count?: true | GardenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GardenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GardenMaxAggregateInputType
  }

  export type GetGardenAggregateType<T extends GardenAggregateArgs> = {
        [P in keyof T & keyof AggregateGarden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGarden[P]>
      : GetScalarType<T[P], AggregateGarden[P]>
  }




  export type GardenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GardenWhereInput
    orderBy?: GardenOrderByWithAggregationInput | GardenOrderByWithAggregationInput[]
    by: GardenScalarFieldEnum[] | GardenScalarFieldEnum
    having?: GardenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GardenCountAggregateInputType | true
    _min?: GardenMinAggregateInputType
    _max?: GardenMaxAggregateInputType
  }

  export type GardenGroupByOutputType = {
    id: string
    name: string
    visibility: boolean
    ownerId: string
    _count: GardenCountAggregateOutputType | null
    _min: GardenMinAggregateOutputType | null
    _max: GardenMaxAggregateOutputType | null
  }

  type GetGardenGroupByPayload<T extends GardenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GardenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GardenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GardenGroupByOutputType[P]>
            : GetScalarType<T[P], GardenGroupByOutputType[P]>
        }
      >
    >


  export type GardenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    visibility?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plants?: boolean | Garden$plantsArgs<ExtArgs>
    _count?: boolean | GardenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["garden"]>



  export type GardenSelectScalar = {
    id?: boolean
    name?: boolean
    visibility?: boolean
    ownerId?: boolean
  }

  export type GardenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "visibility" | "ownerId", ExtArgs["result"]["garden"]>
  export type GardenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    plants?: boolean | Garden$plantsArgs<ExtArgs>
    _count?: boolean | GardenCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GardenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Garden"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      plants: Prisma.$PlantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      visibility: boolean
      ownerId: string
    }, ExtArgs["result"]["garden"]>
    composites: {}
  }

  type GardenGetPayload<S extends boolean | null | undefined | GardenDefaultArgs> = $Result.GetResult<Prisma.$GardenPayload, S>

  type GardenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GardenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GardenCountAggregateInputType | true
    }

  export interface GardenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Garden'], meta: { name: 'Garden' } }
    /**
     * Find zero or one Garden that matches the filter.
     * @param {GardenFindUniqueArgs} args - Arguments to find a Garden
     * @example
     * // Get one Garden
     * const garden = await prisma.garden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GardenFindUniqueArgs>(args: SelectSubset<T, GardenFindUniqueArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Garden that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GardenFindUniqueOrThrowArgs} args - Arguments to find a Garden
     * @example
     * // Get one Garden
     * const garden = await prisma.garden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GardenFindUniqueOrThrowArgs>(args: SelectSubset<T, GardenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Garden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenFindFirstArgs} args - Arguments to find a Garden
     * @example
     * // Get one Garden
     * const garden = await prisma.garden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GardenFindFirstArgs>(args?: SelectSubset<T, GardenFindFirstArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Garden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenFindFirstOrThrowArgs} args - Arguments to find a Garden
     * @example
     * // Get one Garden
     * const garden = await prisma.garden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GardenFindFirstOrThrowArgs>(args?: SelectSubset<T, GardenFindFirstOrThrowArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gardens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gardens
     * const gardens = await prisma.garden.findMany()
     * 
     * // Get first 10 Gardens
     * const gardens = await prisma.garden.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gardenWithIdOnly = await prisma.garden.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GardenFindManyArgs>(args?: SelectSubset<T, GardenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Garden.
     * @param {GardenCreateArgs} args - Arguments to create a Garden.
     * @example
     * // Create one Garden
     * const Garden = await prisma.garden.create({
     *   data: {
     *     // ... data to create a Garden
     *   }
     * })
     * 
     */
    create<T extends GardenCreateArgs>(args: SelectSubset<T, GardenCreateArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gardens.
     * @param {GardenCreateManyArgs} args - Arguments to create many Gardens.
     * @example
     * // Create many Gardens
     * const garden = await prisma.garden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GardenCreateManyArgs>(args?: SelectSubset<T, GardenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Garden.
     * @param {GardenDeleteArgs} args - Arguments to delete one Garden.
     * @example
     * // Delete one Garden
     * const Garden = await prisma.garden.delete({
     *   where: {
     *     // ... filter to delete one Garden
     *   }
     * })
     * 
     */
    delete<T extends GardenDeleteArgs>(args: SelectSubset<T, GardenDeleteArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Garden.
     * @param {GardenUpdateArgs} args - Arguments to update one Garden.
     * @example
     * // Update one Garden
     * const garden = await prisma.garden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GardenUpdateArgs>(args: SelectSubset<T, GardenUpdateArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gardens.
     * @param {GardenDeleteManyArgs} args - Arguments to filter Gardens to delete.
     * @example
     * // Delete a few Gardens
     * const { count } = await prisma.garden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GardenDeleteManyArgs>(args?: SelectSubset<T, GardenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gardens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gardens
     * const garden = await prisma.garden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GardenUpdateManyArgs>(args: SelectSubset<T, GardenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Garden.
     * @param {GardenUpsertArgs} args - Arguments to update or create a Garden.
     * @example
     * // Update or create a Garden
     * const garden = await prisma.garden.upsert({
     *   create: {
     *     // ... data to create a Garden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Garden we want to update
     *   }
     * })
     */
    upsert<T extends GardenUpsertArgs>(args: SelectSubset<T, GardenUpsertArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gardens that matches the filter.
     * @param {GardenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const garden = await prisma.garden.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: GardenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Garden.
     * @param {GardenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const garden = await prisma.garden.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: GardenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Gardens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenCountArgs} args - Arguments to filter Gardens to count.
     * @example
     * // Count the number of Gardens
     * const count = await prisma.garden.count({
     *   where: {
     *     // ... the filter for the Gardens we want to count
     *   }
     * })
    **/
    count<T extends GardenCountArgs>(
      args?: Subset<T, GardenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GardenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Garden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GardenAggregateArgs>(args: Subset<T, GardenAggregateArgs>): Prisma.PrismaPromise<GetGardenAggregateType<T>>

    /**
     * Group by Garden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GardenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GardenGroupByArgs['orderBy'] }
        : { orderBy?: GardenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GardenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGardenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Garden model
   */
  readonly fields: GardenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Garden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GardenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plants<T extends Garden$plantsArgs<ExtArgs> = {}>(args?: Subset<T, Garden$plantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Garden model
   */
  interface GardenFieldRefs {
    readonly id: FieldRef<"Garden", 'String'>
    readonly name: FieldRef<"Garden", 'String'>
    readonly visibility: FieldRef<"Garden", 'Boolean'>
    readonly ownerId: FieldRef<"Garden", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Garden findUnique
   */
  export type GardenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Garden to fetch.
     */
    where: GardenWhereUniqueInput
  }

  /**
   * Garden findUniqueOrThrow
   */
  export type GardenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Garden to fetch.
     */
    where: GardenWhereUniqueInput
  }

  /**
   * Garden findFirst
   */
  export type GardenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Garden to fetch.
     */
    where?: GardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gardens to fetch.
     */
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gardens.
     */
    cursor?: GardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gardens.
     */
    distinct?: GardenScalarFieldEnum | GardenScalarFieldEnum[]
  }

  /**
   * Garden findFirstOrThrow
   */
  export type GardenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Garden to fetch.
     */
    where?: GardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gardens to fetch.
     */
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gardens.
     */
    cursor?: GardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gardens.
     */
    distinct?: GardenScalarFieldEnum | GardenScalarFieldEnum[]
  }

  /**
   * Garden findMany
   */
  export type GardenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Gardens to fetch.
     */
    where?: GardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gardens to fetch.
     */
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gardens.
     */
    cursor?: GardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gardens.
     */
    skip?: number
    distinct?: GardenScalarFieldEnum | GardenScalarFieldEnum[]
  }

  /**
   * Garden create
   */
  export type GardenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * The data needed to create a Garden.
     */
    data: XOR<GardenCreateInput, GardenUncheckedCreateInput>
  }

  /**
   * Garden createMany
   */
  export type GardenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gardens.
     */
    data: GardenCreateManyInput | GardenCreateManyInput[]
  }

  /**
   * Garden update
   */
  export type GardenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * The data needed to update a Garden.
     */
    data: XOR<GardenUpdateInput, GardenUncheckedUpdateInput>
    /**
     * Choose, which Garden to update.
     */
    where: GardenWhereUniqueInput
  }

  /**
   * Garden updateMany
   */
  export type GardenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gardens.
     */
    data: XOR<GardenUpdateManyMutationInput, GardenUncheckedUpdateManyInput>
    /**
     * Filter which Gardens to update
     */
    where?: GardenWhereInput
    /**
     * Limit how many Gardens to update.
     */
    limit?: number
  }

  /**
   * Garden upsert
   */
  export type GardenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * The filter to search for the Garden to update in case it exists.
     */
    where: GardenWhereUniqueInput
    /**
     * In case the Garden found by the `where` argument doesn't exist, create a new Garden with this data.
     */
    create: XOR<GardenCreateInput, GardenUncheckedCreateInput>
    /**
     * In case the Garden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GardenUpdateInput, GardenUncheckedUpdateInput>
  }

  /**
   * Garden delete
   */
  export type GardenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter which Garden to delete.
     */
    where: GardenWhereUniqueInput
  }

  /**
   * Garden deleteMany
   */
  export type GardenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gardens to delete
     */
    where?: GardenWhereInput
    /**
     * Limit how many Gardens to delete.
     */
    limit?: number
  }

  /**
   * Garden findRaw
   */
  export type GardenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Garden aggregateRaw
   */
  export type GardenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Garden.plants
   */
  export type Garden$plantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    where?: PlantWhereInput
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    cursor?: PlantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Garden without action
   */
  export type GardenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
  }


  /**
   * Model Plant
   */

  export type AggregatePlant = {
    _count: PlantCountAggregateOutputType | null
    _min: PlantMinAggregateOutputType | null
    _max: PlantMaxAggregateOutputType | null
  }

  export type PlantMinAggregateOutputType = {
    id: string | null
    name: string | null
    genus: string | null
    planting: string | null
    habitat: string | null
    sun: string | null
    water: string | null
    gardenId: string | null
  }

  export type PlantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    genus: string | null
    planting: string | null
    habitat: string | null
    sun: string | null
    water: string | null
    gardenId: string | null
  }

  export type PlantCountAggregateOutputType = {
    id: number
    name: number
    genus: number
    planting: number
    comments: number
    habitat: number
    uses: number
    sun: number
    water: number
    gardenId: number
    _all: number
  }


  export type PlantMinAggregateInputType = {
    id?: true
    name?: true
    genus?: true
    planting?: true
    habitat?: true
    sun?: true
    water?: true
    gardenId?: true
  }

  export type PlantMaxAggregateInputType = {
    id?: true
    name?: true
    genus?: true
    planting?: true
    habitat?: true
    sun?: true
    water?: true
    gardenId?: true
  }

  export type PlantCountAggregateInputType = {
    id?: true
    name?: true
    genus?: true
    planting?: true
    comments?: true
    habitat?: true
    uses?: true
    sun?: true
    water?: true
    gardenId?: true
    _all?: true
  }

  export type PlantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plant to aggregate.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plants
    **/
    _count?: true | PlantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlantMaxAggregateInputType
  }

  export type GetPlantAggregateType<T extends PlantAggregateArgs> = {
        [P in keyof T & keyof AggregatePlant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlant[P]>
      : GetScalarType<T[P], AggregatePlant[P]>
  }




  export type PlantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlantWhereInput
    orderBy?: PlantOrderByWithAggregationInput | PlantOrderByWithAggregationInput[]
    by: PlantScalarFieldEnum[] | PlantScalarFieldEnum
    having?: PlantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlantCountAggregateInputType | true
    _min?: PlantMinAggregateInputType
    _max?: PlantMaxAggregateInputType
  }

  export type PlantGroupByOutputType = {
    id: string
    name: string
    genus: string
    planting: string
    comments: string[]
    habitat: string
    uses: string[]
    sun: string
    water: string
    gardenId: string
    _count: PlantCountAggregateOutputType | null
    _min: PlantMinAggregateOutputType | null
    _max: PlantMaxAggregateOutputType | null
  }

  type GetPlantGroupByPayload<T extends PlantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlantGroupByOutputType[P]>
            : GetScalarType<T[P], PlantGroupByOutputType[P]>
        }
      >
    >


  export type PlantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genus?: boolean
    planting?: boolean
    comments?: boolean
    habitat?: boolean
    uses?: boolean
    sun?: boolean
    water?: boolean
    gardenId?: boolean
    other?: boolean | Plant$otherArgs<ExtArgs>
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    _count?: boolean | PlantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plant"]>



  export type PlantSelectScalar = {
    id?: boolean
    name?: boolean
    genus?: boolean
    planting?: boolean
    comments?: boolean
    habitat?: boolean
    uses?: boolean
    sun?: boolean
    water?: boolean
    gardenId?: boolean
  }

  export type PlantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "genus" | "planting" | "comments" | "habitat" | "uses" | "sun" | "water" | "gardenId", ExtArgs["result"]["plant"]>
  export type PlantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other?: boolean | Plant$otherArgs<ExtArgs>
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    _count?: boolean | PlantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plant"
    objects: {
      other: Prisma.$AtributePayload<ExtArgs>[]
      garden: Prisma.$GardenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      genus: string
      planting: string
      comments: string[]
      habitat: string
      uses: string[]
      sun: string
      water: string
      gardenId: string
    }, ExtArgs["result"]["plant"]>
    composites: {}
  }

  type PlantGetPayload<S extends boolean | null | undefined | PlantDefaultArgs> = $Result.GetResult<Prisma.$PlantPayload, S>

  type PlantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlantCountAggregateInputType | true
    }

  export interface PlantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plant'], meta: { name: 'Plant' } }
    /**
     * Find zero or one Plant that matches the filter.
     * @param {PlantFindUniqueArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlantFindUniqueArgs>(args: SelectSubset<T, PlantFindUniqueArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlantFindUniqueOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlantFindUniqueOrThrowArgs>(args: SelectSubset<T, PlantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlantFindFirstArgs>(args?: SelectSubset<T, PlantFindFirstArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindFirstOrThrowArgs} args - Arguments to find a Plant
     * @example
     * // Get one Plant
     * const plant = await prisma.plant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlantFindFirstOrThrowArgs>(args?: SelectSubset<T, PlantFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plants
     * const plants = await prisma.plant.findMany()
     * 
     * // Get first 10 Plants
     * const plants = await prisma.plant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const plantWithIdOnly = await prisma.plant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlantFindManyArgs>(args?: SelectSubset<T, PlantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plant.
     * @param {PlantCreateArgs} args - Arguments to create a Plant.
     * @example
     * // Create one Plant
     * const Plant = await prisma.plant.create({
     *   data: {
     *     // ... data to create a Plant
     *   }
     * })
     * 
     */
    create<T extends PlantCreateArgs>(args: SelectSubset<T, PlantCreateArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plants.
     * @param {PlantCreateManyArgs} args - Arguments to create many Plants.
     * @example
     * // Create many Plants
     * const plant = await prisma.plant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlantCreateManyArgs>(args?: SelectSubset<T, PlantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plant.
     * @param {PlantDeleteArgs} args - Arguments to delete one Plant.
     * @example
     * // Delete one Plant
     * const Plant = await prisma.plant.delete({
     *   where: {
     *     // ... filter to delete one Plant
     *   }
     * })
     * 
     */
    delete<T extends PlantDeleteArgs>(args: SelectSubset<T, PlantDeleteArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plant.
     * @param {PlantUpdateArgs} args - Arguments to update one Plant.
     * @example
     * // Update one Plant
     * const plant = await prisma.plant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlantUpdateArgs>(args: SelectSubset<T, PlantUpdateArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plants.
     * @param {PlantDeleteManyArgs} args - Arguments to filter Plants to delete.
     * @example
     * // Delete a few Plants
     * const { count } = await prisma.plant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlantDeleteManyArgs>(args?: SelectSubset<T, PlantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plants
     * const plant = await prisma.plant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlantUpdateManyArgs>(args: SelectSubset<T, PlantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plant.
     * @param {PlantUpsertArgs} args - Arguments to update or create a Plant.
     * @example
     * // Update or create a Plant
     * const plant = await prisma.plant.upsert({
     *   create: {
     *     // ... data to create a Plant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plant we want to update
     *   }
     * })
     */
    upsert<T extends PlantUpsertArgs>(args: SelectSubset<T, PlantUpsertArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plants that matches the filter.
     * @param {PlantFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const plant = await prisma.plant.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PlantFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Plant.
     * @param {PlantAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const plant = await prisma.plant.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PlantAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Plants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantCountArgs} args - Arguments to filter Plants to count.
     * @example
     * // Count the number of Plants
     * const count = await prisma.plant.count({
     *   where: {
     *     // ... the filter for the Plants we want to count
     *   }
     * })
    **/
    count<T extends PlantCountArgs>(
      args?: Subset<T, PlantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlantAggregateArgs>(args: Subset<T, PlantAggregateArgs>): Prisma.PrismaPromise<GetPlantAggregateType<T>>

    /**
     * Group by Plant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlantGroupByArgs['orderBy'] }
        : { orderBy?: PlantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plant model
   */
  readonly fields: PlantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    other<T extends Plant$otherArgs<ExtArgs> = {}>(args?: Subset<T, Plant$otherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    garden<T extends GardenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GardenDefaultArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plant model
   */
  interface PlantFieldRefs {
    readonly id: FieldRef<"Plant", 'String'>
    readonly name: FieldRef<"Plant", 'String'>
    readonly genus: FieldRef<"Plant", 'String'>
    readonly planting: FieldRef<"Plant", 'String'>
    readonly comments: FieldRef<"Plant", 'String[]'>
    readonly habitat: FieldRef<"Plant", 'String'>
    readonly uses: FieldRef<"Plant", 'String[]'>
    readonly sun: FieldRef<"Plant", 'String'>
    readonly water: FieldRef<"Plant", 'String'>
    readonly gardenId: FieldRef<"Plant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plant findUnique
   */
  export type PlantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant findUniqueOrThrow
   */
  export type PlantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant findFirst
   */
  export type PlantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant findFirstOrThrow
   */
  export type PlantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plant to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plants.
     */
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant findMany
   */
  export type PlantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter, which Plants to fetch.
     */
    where?: PlantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plants to fetch.
     */
    orderBy?: PlantOrderByWithRelationInput | PlantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plants.
     */
    cursor?: PlantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plants.
     */
    skip?: number
    distinct?: PlantScalarFieldEnum | PlantScalarFieldEnum[]
  }

  /**
   * Plant create
   */
  export type PlantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The data needed to create a Plant.
     */
    data: XOR<PlantCreateInput, PlantUncheckedCreateInput>
  }

  /**
   * Plant createMany
   */
  export type PlantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plants.
     */
    data: PlantCreateManyInput | PlantCreateManyInput[]
  }

  /**
   * Plant update
   */
  export type PlantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The data needed to update a Plant.
     */
    data: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>
    /**
     * Choose, which Plant to update.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant updateMany
   */
  export type PlantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plants.
     */
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyInput>
    /**
     * Filter which Plants to update
     */
    where?: PlantWhereInput
    /**
     * Limit how many Plants to update.
     */
    limit?: number
  }

  /**
   * Plant upsert
   */
  export type PlantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * The filter to search for the Plant to update in case it exists.
     */
    where: PlantWhereUniqueInput
    /**
     * In case the Plant found by the `where` argument doesn't exist, create a new Plant with this data.
     */
    create: XOR<PlantCreateInput, PlantUncheckedCreateInput>
    /**
     * In case the Plant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlantUpdateInput, PlantUncheckedUpdateInput>
  }

  /**
   * Plant delete
   */
  export type PlantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
    /**
     * Filter which Plant to delete.
     */
    where: PlantWhereUniqueInput
  }

  /**
   * Plant deleteMany
   */
  export type PlantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plants to delete
     */
    where?: PlantWhereInput
    /**
     * Limit how many Plants to delete.
     */
    limit?: number
  }

  /**
   * Plant findRaw
   */
  export type PlantFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Plant aggregateRaw
   */
  export type PlantAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Plant.other
   */
  export type Plant$otherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    where?: AtributeWhereInput
    orderBy?: AtributeOrderByWithRelationInput | AtributeOrderByWithRelationInput[]
    cursor?: AtributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtributeScalarFieldEnum | AtributeScalarFieldEnum[]
  }

  /**
   * Plant without action
   */
  export type PlantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plant
     */
    select?: PlantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plant
     */
    omit?: PlantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlantInclude<ExtArgs> | null
  }


  /**
   * Model Atribute
   */

  export type AggregateAtribute = {
    _count: AtributeCountAggregateOutputType | null
    _min: AtributeMinAggregateOutputType | null
    _max: AtributeMaxAggregateOutputType | null
  }

  export type AtributeMinAggregateOutputType = {
    id: string | null
    title: string | null
    plantId: string | null
  }

  export type AtributeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    plantId: string | null
  }

  export type AtributeCountAggregateOutputType = {
    id: number
    title: number
    information: number
    plantId: number
    _all: number
  }


  export type AtributeMinAggregateInputType = {
    id?: true
    title?: true
    plantId?: true
  }

  export type AtributeMaxAggregateInputType = {
    id?: true
    title?: true
    plantId?: true
  }

  export type AtributeCountAggregateInputType = {
    id?: true
    title?: true
    information?: true
    plantId?: true
    _all?: true
  }

  export type AtributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atribute to aggregate.
     */
    where?: AtributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atributes to fetch.
     */
    orderBy?: AtributeOrderByWithRelationInput | AtributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atributes
    **/
    _count?: true | AtributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtributeMaxAggregateInputType
  }

  export type GetAtributeAggregateType<T extends AtributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAtribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtribute[P]>
      : GetScalarType<T[P], AggregateAtribute[P]>
  }




  export type AtributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtributeWhereInput
    orderBy?: AtributeOrderByWithAggregationInput | AtributeOrderByWithAggregationInput[]
    by: AtributeScalarFieldEnum[] | AtributeScalarFieldEnum
    having?: AtributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtributeCountAggregateInputType | true
    _min?: AtributeMinAggregateInputType
    _max?: AtributeMaxAggregateInputType
  }

  export type AtributeGroupByOutputType = {
    id: string
    title: string
    information: string[]
    plantId: string
    _count: AtributeCountAggregateOutputType | null
    _min: AtributeMinAggregateOutputType | null
    _max: AtributeMaxAggregateOutputType | null
  }

  type GetAtributeGroupByPayload<T extends AtributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtributeGroupByOutputType[P]>
            : GetScalarType<T[P], AtributeGroupByOutputType[P]>
        }
      >
    >


  export type AtributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    information?: boolean
    plantId?: boolean
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atribute"]>



  export type AtributeSelectScalar = {
    id?: boolean
    title?: boolean
    information?: boolean
    plantId?: boolean
  }

  export type AtributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "information" | "plantId", ExtArgs["result"]["atribute"]>
  export type AtributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plant?: boolean | PlantDefaultArgs<ExtArgs>
  }

  export type $AtributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atribute"
    objects: {
      plant: Prisma.$PlantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      information: string[]
      plantId: string
    }, ExtArgs["result"]["atribute"]>
    composites: {}
  }

  type AtributeGetPayload<S extends boolean | null | undefined | AtributeDefaultArgs> = $Result.GetResult<Prisma.$AtributePayload, S>

  type AtributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtributeCountAggregateInputType | true
    }

  export interface AtributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atribute'], meta: { name: 'Atribute' } }
    /**
     * Find zero or one Atribute that matches the filter.
     * @param {AtributeFindUniqueArgs} args - Arguments to find a Atribute
     * @example
     * // Get one Atribute
     * const atribute = await prisma.atribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtributeFindUniqueArgs>(args: SelectSubset<T, AtributeFindUniqueArgs<ExtArgs>>): Prisma__AtributeClient<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtributeFindUniqueOrThrowArgs} args - Arguments to find a Atribute
     * @example
     * // Get one Atribute
     * const atribute = await prisma.atribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtributeFindUniqueOrThrowArgs>(args: SelectSubset<T, AtributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtributeClient<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtributeFindFirstArgs} args - Arguments to find a Atribute
     * @example
     * // Get one Atribute
     * const atribute = await prisma.atribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtributeFindFirstArgs>(args?: SelectSubset<T, AtributeFindFirstArgs<ExtArgs>>): Prisma__AtributeClient<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtributeFindFirstOrThrowArgs} args - Arguments to find a Atribute
     * @example
     * // Get one Atribute
     * const atribute = await prisma.atribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtributeFindFirstOrThrowArgs>(args?: SelectSubset<T, AtributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtributeClient<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atributes
     * const atributes = await prisma.atribute.findMany()
     * 
     * // Get first 10 Atributes
     * const atributes = await prisma.atribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atributeWithIdOnly = await prisma.atribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtributeFindManyArgs>(args?: SelectSubset<T, AtributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atribute.
     * @param {AtributeCreateArgs} args - Arguments to create a Atribute.
     * @example
     * // Create one Atribute
     * const Atribute = await prisma.atribute.create({
     *   data: {
     *     // ... data to create a Atribute
     *   }
     * })
     * 
     */
    create<T extends AtributeCreateArgs>(args: SelectSubset<T, AtributeCreateArgs<ExtArgs>>): Prisma__AtributeClient<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atributes.
     * @param {AtributeCreateManyArgs} args - Arguments to create many Atributes.
     * @example
     * // Create many Atributes
     * const atribute = await prisma.atribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtributeCreateManyArgs>(args?: SelectSubset<T, AtributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Atribute.
     * @param {AtributeDeleteArgs} args - Arguments to delete one Atribute.
     * @example
     * // Delete one Atribute
     * const Atribute = await prisma.atribute.delete({
     *   where: {
     *     // ... filter to delete one Atribute
     *   }
     * })
     * 
     */
    delete<T extends AtributeDeleteArgs>(args: SelectSubset<T, AtributeDeleteArgs<ExtArgs>>): Prisma__AtributeClient<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atribute.
     * @param {AtributeUpdateArgs} args - Arguments to update one Atribute.
     * @example
     * // Update one Atribute
     * const atribute = await prisma.atribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtributeUpdateArgs>(args: SelectSubset<T, AtributeUpdateArgs<ExtArgs>>): Prisma__AtributeClient<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atributes.
     * @param {AtributeDeleteManyArgs} args - Arguments to filter Atributes to delete.
     * @example
     * // Delete a few Atributes
     * const { count } = await prisma.atribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtributeDeleteManyArgs>(args?: SelectSubset<T, AtributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atributes
     * const atribute = await prisma.atribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtributeUpdateManyArgs>(args: SelectSubset<T, AtributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atribute.
     * @param {AtributeUpsertArgs} args - Arguments to update or create a Atribute.
     * @example
     * // Update or create a Atribute
     * const atribute = await prisma.atribute.upsert({
     *   create: {
     *     // ... data to create a Atribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atribute we want to update
     *   }
     * })
     */
    upsert<T extends AtributeUpsertArgs>(args: SelectSubset<T, AtributeUpsertArgs<ExtArgs>>): Prisma__AtributeClient<$Result.GetResult<Prisma.$AtributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atributes that matches the filter.
     * @param {AtributeFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const atribute = await prisma.atribute.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AtributeFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Atribute.
     * @param {AtributeAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const atribute = await prisma.atribute.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AtributeAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Atributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtributeCountArgs} args - Arguments to filter Atributes to count.
     * @example
     * // Count the number of Atributes
     * const count = await prisma.atribute.count({
     *   where: {
     *     // ... the filter for the Atributes we want to count
     *   }
     * })
    **/
    count<T extends AtributeCountArgs>(
      args?: Subset<T, AtributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AtributeAggregateArgs>(args: Subset<T, AtributeAggregateArgs>): Prisma.PrismaPromise<GetAtributeAggregateType<T>>

    /**
     * Group by Atribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtributeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AtributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtributeGroupByArgs['orderBy'] }
        : { orderBy?: AtributeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AtributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atribute model
   */
  readonly fields: AtributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plant<T extends PlantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlantDefaultArgs<ExtArgs>>): Prisma__PlantClient<$Result.GetResult<Prisma.$PlantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Atribute model
   */
  interface AtributeFieldRefs {
    readonly id: FieldRef<"Atribute", 'String'>
    readonly title: FieldRef<"Atribute", 'String'>
    readonly information: FieldRef<"Atribute", 'String[]'>
    readonly plantId: FieldRef<"Atribute", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Atribute findUnique
   */
  export type AtributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * Filter, which Atribute to fetch.
     */
    where: AtributeWhereUniqueInput
  }

  /**
   * Atribute findUniqueOrThrow
   */
  export type AtributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * Filter, which Atribute to fetch.
     */
    where: AtributeWhereUniqueInput
  }

  /**
   * Atribute findFirst
   */
  export type AtributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * Filter, which Atribute to fetch.
     */
    where?: AtributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atributes to fetch.
     */
    orderBy?: AtributeOrderByWithRelationInput | AtributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atributes.
     */
    cursor?: AtributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atributes.
     */
    distinct?: AtributeScalarFieldEnum | AtributeScalarFieldEnum[]
  }

  /**
   * Atribute findFirstOrThrow
   */
  export type AtributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * Filter, which Atribute to fetch.
     */
    where?: AtributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atributes to fetch.
     */
    orderBy?: AtributeOrderByWithRelationInput | AtributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atributes.
     */
    cursor?: AtributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atributes.
     */
    distinct?: AtributeScalarFieldEnum | AtributeScalarFieldEnum[]
  }

  /**
   * Atribute findMany
   */
  export type AtributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * Filter, which Atributes to fetch.
     */
    where?: AtributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atributes to fetch.
     */
    orderBy?: AtributeOrderByWithRelationInput | AtributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atributes.
     */
    cursor?: AtributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atributes.
     */
    skip?: number
    distinct?: AtributeScalarFieldEnum | AtributeScalarFieldEnum[]
  }

  /**
   * Atribute create
   */
  export type AtributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Atribute.
     */
    data: XOR<AtributeCreateInput, AtributeUncheckedCreateInput>
  }

  /**
   * Atribute createMany
   */
  export type AtributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atributes.
     */
    data: AtributeCreateManyInput | AtributeCreateManyInput[]
  }

  /**
   * Atribute update
   */
  export type AtributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Atribute.
     */
    data: XOR<AtributeUpdateInput, AtributeUncheckedUpdateInput>
    /**
     * Choose, which Atribute to update.
     */
    where: AtributeWhereUniqueInput
  }

  /**
   * Atribute updateMany
   */
  export type AtributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atributes.
     */
    data: XOR<AtributeUpdateManyMutationInput, AtributeUncheckedUpdateManyInput>
    /**
     * Filter which Atributes to update
     */
    where?: AtributeWhereInput
    /**
     * Limit how many Atributes to update.
     */
    limit?: number
  }

  /**
   * Atribute upsert
   */
  export type AtributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Atribute to update in case it exists.
     */
    where: AtributeWhereUniqueInput
    /**
     * In case the Atribute found by the `where` argument doesn't exist, create a new Atribute with this data.
     */
    create: XOR<AtributeCreateInput, AtributeUncheckedCreateInput>
    /**
     * In case the Atribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtributeUpdateInput, AtributeUncheckedUpdateInput>
  }

  /**
   * Atribute delete
   */
  export type AtributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
    /**
     * Filter which Atribute to delete.
     */
    where: AtributeWhereUniqueInput
  }

  /**
   * Atribute deleteMany
   */
  export type AtributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atributes to delete
     */
    where?: AtributeWhereInput
    /**
     * Limit how many Atributes to delete.
     */
    limit?: number
  }

  /**
   * Atribute findRaw
   */
  export type AtributeFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Atribute aggregateRaw
   */
  export type AtributeAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Atribute without action
   */
  export type AtributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atribute
     */
    select?: AtributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atribute
     */
    omit?: AtributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtributeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GardenScalarFieldEnum: {
    id: 'id',
    name: 'name',
    visibility: 'visibility',
    ownerId: 'ownerId'
  };

  export type GardenScalarFieldEnum = (typeof GardenScalarFieldEnum)[keyof typeof GardenScalarFieldEnum]


  export const PlantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    genus: 'genus',
    planting: 'planting',
    comments: 'comments',
    habitat: 'habitat',
    uses: 'uses',
    sun: 'sun',
    water: 'water',
    gardenId: 'gardenId'
  };

  export type PlantScalarFieldEnum = (typeof PlantScalarFieldEnum)[keyof typeof PlantScalarFieldEnum]


  export const AtributeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    information: 'information',
    plantId: 'plantId'
  };

  export type AtributeScalarFieldEnum = (typeof AtributeScalarFieldEnum)[keyof typeof AtributeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    gardens?: GardenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    gardens?: GardenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    gardens?: GardenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type GardenWhereInput = {
    AND?: GardenWhereInput | GardenWhereInput[]
    OR?: GardenWhereInput[]
    NOT?: GardenWhereInput | GardenWhereInput[]
    id?: StringFilter<"Garden"> | string
    name?: StringFilter<"Garden"> | string
    visibility?: BoolFilter<"Garden"> | boolean
    ownerId?: StringFilter<"Garden"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    plants?: PlantListRelationFilter
  }

  export type GardenOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    plants?: PlantOrderByRelationAggregateInput
  }

  export type GardenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GardenWhereInput | GardenWhereInput[]
    OR?: GardenWhereInput[]
    NOT?: GardenWhereInput | GardenWhereInput[]
    name?: StringFilter<"Garden"> | string
    visibility?: BoolFilter<"Garden"> | boolean
    ownerId?: StringFilter<"Garden"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    plants?: PlantListRelationFilter
  }, "id">

  export type GardenOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    ownerId?: SortOrder
    _count?: GardenCountOrderByAggregateInput
    _max?: GardenMaxOrderByAggregateInput
    _min?: GardenMinOrderByAggregateInput
  }

  export type GardenScalarWhereWithAggregatesInput = {
    AND?: GardenScalarWhereWithAggregatesInput | GardenScalarWhereWithAggregatesInput[]
    OR?: GardenScalarWhereWithAggregatesInput[]
    NOT?: GardenScalarWhereWithAggregatesInput | GardenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Garden"> | string
    name?: StringWithAggregatesFilter<"Garden"> | string
    visibility?: BoolWithAggregatesFilter<"Garden"> | boolean
    ownerId?: StringWithAggregatesFilter<"Garden"> | string
  }

  export type PlantWhereInput = {
    AND?: PlantWhereInput | PlantWhereInput[]
    OR?: PlantWhereInput[]
    NOT?: PlantWhereInput | PlantWhereInput[]
    id?: StringFilter<"Plant"> | string
    name?: StringFilter<"Plant"> | string
    genus?: StringFilter<"Plant"> | string
    planting?: StringFilter<"Plant"> | string
    comments?: StringNullableListFilter<"Plant">
    habitat?: StringFilter<"Plant"> | string
    uses?: StringNullableListFilter<"Plant">
    sun?: StringFilter<"Plant"> | string
    water?: StringFilter<"Plant"> | string
    gardenId?: StringFilter<"Plant"> | string
    other?: AtributeListRelationFilter
    garden?: XOR<GardenScalarRelationFilter, GardenWhereInput>
  }

  export type PlantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    planting?: SortOrder
    comments?: SortOrder
    habitat?: SortOrder
    uses?: SortOrder
    sun?: SortOrder
    water?: SortOrder
    gardenId?: SortOrder
    other?: AtributeOrderByRelationAggregateInput
    garden?: GardenOrderByWithRelationInput
  }

  export type PlantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlantWhereInput | PlantWhereInput[]
    OR?: PlantWhereInput[]
    NOT?: PlantWhereInput | PlantWhereInput[]
    name?: StringFilter<"Plant"> | string
    genus?: StringFilter<"Plant"> | string
    planting?: StringFilter<"Plant"> | string
    comments?: StringNullableListFilter<"Plant">
    habitat?: StringFilter<"Plant"> | string
    uses?: StringNullableListFilter<"Plant">
    sun?: StringFilter<"Plant"> | string
    water?: StringFilter<"Plant"> | string
    gardenId?: StringFilter<"Plant"> | string
    other?: AtributeListRelationFilter
    garden?: XOR<GardenScalarRelationFilter, GardenWhereInput>
  }, "id">

  export type PlantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    planting?: SortOrder
    comments?: SortOrder
    habitat?: SortOrder
    uses?: SortOrder
    sun?: SortOrder
    water?: SortOrder
    gardenId?: SortOrder
    _count?: PlantCountOrderByAggregateInput
    _max?: PlantMaxOrderByAggregateInput
    _min?: PlantMinOrderByAggregateInput
  }

  export type PlantScalarWhereWithAggregatesInput = {
    AND?: PlantScalarWhereWithAggregatesInput | PlantScalarWhereWithAggregatesInput[]
    OR?: PlantScalarWhereWithAggregatesInput[]
    NOT?: PlantScalarWhereWithAggregatesInput | PlantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plant"> | string
    name?: StringWithAggregatesFilter<"Plant"> | string
    genus?: StringWithAggregatesFilter<"Plant"> | string
    planting?: StringWithAggregatesFilter<"Plant"> | string
    comments?: StringNullableListFilter<"Plant">
    habitat?: StringWithAggregatesFilter<"Plant"> | string
    uses?: StringNullableListFilter<"Plant">
    sun?: StringWithAggregatesFilter<"Plant"> | string
    water?: StringWithAggregatesFilter<"Plant"> | string
    gardenId?: StringWithAggregatesFilter<"Plant"> | string
  }

  export type AtributeWhereInput = {
    AND?: AtributeWhereInput | AtributeWhereInput[]
    OR?: AtributeWhereInput[]
    NOT?: AtributeWhereInput | AtributeWhereInput[]
    id?: StringFilter<"Atribute"> | string
    title?: StringFilter<"Atribute"> | string
    information?: StringNullableListFilter<"Atribute">
    plantId?: StringFilter<"Atribute"> | string
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>
  }

  export type AtributeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    information?: SortOrder
    plantId?: SortOrder
    plant?: PlantOrderByWithRelationInput
  }

  export type AtributeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AtributeWhereInput | AtributeWhereInput[]
    OR?: AtributeWhereInput[]
    NOT?: AtributeWhereInput | AtributeWhereInput[]
    title?: StringFilter<"Atribute"> | string
    information?: StringNullableListFilter<"Atribute">
    plantId?: StringFilter<"Atribute"> | string
    plant?: XOR<PlantScalarRelationFilter, PlantWhereInput>
  }, "id">

  export type AtributeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    information?: SortOrder
    plantId?: SortOrder
    _count?: AtributeCountOrderByAggregateInput
    _max?: AtributeMaxOrderByAggregateInput
    _min?: AtributeMinOrderByAggregateInput
  }

  export type AtributeScalarWhereWithAggregatesInput = {
    AND?: AtributeScalarWhereWithAggregatesInput | AtributeScalarWhereWithAggregatesInput[]
    OR?: AtributeScalarWhereWithAggregatesInput[]
    NOT?: AtributeScalarWhereWithAggregatesInput | AtributeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Atribute"> | string
    title?: StringWithAggregatesFilter<"Atribute"> | string
    information?: StringNullableListFilter<"Atribute">
    plantId?: StringWithAggregatesFilter<"Atribute"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    gardens?: GardenCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    gardens?: GardenUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gardens?: GardenUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gardens?: GardenUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type GardenCreateInput = {
    id?: string
    name: string
    visibility: boolean
    owner: UserCreateNestedOneWithoutGardensInput
    plants?: PlantCreateNestedManyWithoutGardenInput
  }

  export type GardenUncheckedCreateInput = {
    id?: string
    name: string
    visibility: boolean
    ownerId: string
    plants?: PlantUncheckedCreateNestedManyWithoutGardenInput
  }

  export type GardenUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutGardensNestedInput
    plants?: PlantUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    plants?: PlantUncheckedUpdateManyWithoutGardenNestedInput
  }

  export type GardenCreateManyInput = {
    id?: string
    name: string
    visibility: boolean
    ownerId: string
  }

  export type GardenUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GardenUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type PlantCreateInput = {
    id?: string
    name: string
    genus: string
    planting: string
    comments?: PlantCreatecommentsInput | string[]
    habitat: string
    uses?: PlantCreateusesInput | string[]
    sun: string
    water: string
    other?: AtributeCreateNestedManyWithoutPlantInput
    garden: GardenCreateNestedOneWithoutPlantsInput
  }

  export type PlantUncheckedCreateInput = {
    id?: string
    name: string
    genus: string
    planting: string
    comments?: PlantCreatecommentsInput | string[]
    habitat: string
    uses?: PlantCreateusesInput | string[]
    sun: string
    water: string
    gardenId: string
    other?: AtributeUncheckedCreateNestedManyWithoutPlantInput
  }

  export type PlantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
    other?: AtributeUpdateManyWithoutPlantNestedInput
    garden?: GardenUpdateOneRequiredWithoutPlantsNestedInput
  }

  export type PlantUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
    gardenId?: StringFieldUpdateOperationsInput | string
    other?: AtributeUncheckedUpdateManyWithoutPlantNestedInput
  }

  export type PlantCreateManyInput = {
    id?: string
    name: string
    genus: string
    planting: string
    comments?: PlantCreatecommentsInput | string[]
    habitat: string
    uses?: PlantCreateusesInput | string[]
    sun: string
    water: string
    gardenId: string
  }

  export type PlantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
  }

  export type PlantUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
    gardenId?: StringFieldUpdateOperationsInput | string
  }

  export type AtributeCreateInput = {
    id?: string
    title: string
    information?: AtributeCreateinformationInput | string[]
    plant: PlantCreateNestedOneWithoutOtherInput
  }

  export type AtributeUncheckedCreateInput = {
    id?: string
    title: string
    information?: AtributeCreateinformationInput | string[]
    plantId: string
  }

  export type AtributeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    information?: AtributeUpdateinformationInput | string[]
    plant?: PlantUpdateOneRequiredWithoutOtherNestedInput
  }

  export type AtributeUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    information?: AtributeUpdateinformationInput | string[]
    plantId?: StringFieldUpdateOperationsInput | string
  }

  export type AtributeCreateManyInput = {
    id?: string
    title: string
    information?: AtributeCreateinformationInput | string[]
    plantId: string
  }

  export type AtributeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    information?: AtributeUpdateinformationInput | string[]
  }

  export type AtributeUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    information?: AtributeUpdateinformationInput | string[]
    plantId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GardenListRelationFilter = {
    every?: GardenWhereInput
    some?: GardenWhereInput
    none?: GardenWhereInput
  }

  export type GardenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlantListRelationFilter = {
    every?: PlantWhereInput
    some?: PlantWhereInput
    none?: PlantWhereInput
  }

  export type PlantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GardenCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    ownerId?: SortOrder
  }

  export type GardenMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    ownerId?: SortOrder
  }

  export type GardenMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    visibility?: SortOrder
    ownerId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AtributeListRelationFilter = {
    every?: AtributeWhereInput
    some?: AtributeWhereInput
    none?: AtributeWhereInput
  }

  export type GardenScalarRelationFilter = {
    is?: GardenWhereInput
    isNot?: GardenWhereInput
  }

  export type AtributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    planting?: SortOrder
    comments?: SortOrder
    habitat?: SortOrder
    uses?: SortOrder
    sun?: SortOrder
    water?: SortOrder
    gardenId?: SortOrder
  }

  export type PlantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    planting?: SortOrder
    habitat?: SortOrder
    sun?: SortOrder
    water?: SortOrder
    gardenId?: SortOrder
  }

  export type PlantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genus?: SortOrder
    planting?: SortOrder
    habitat?: SortOrder
    sun?: SortOrder
    water?: SortOrder
    gardenId?: SortOrder
  }

  export type PlantScalarRelationFilter = {
    is?: PlantWhereInput
    isNot?: PlantWhereInput
  }

  export type AtributeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    information?: SortOrder
    plantId?: SortOrder
  }

  export type AtributeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    plantId?: SortOrder
  }

  export type AtributeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    plantId?: SortOrder
  }

  export type GardenCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GardenCreateWithoutOwnerInput, GardenUncheckedCreateWithoutOwnerInput> | GardenCreateWithoutOwnerInput[] | GardenUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GardenCreateOrConnectWithoutOwnerInput | GardenCreateOrConnectWithoutOwnerInput[]
    createMany?: GardenCreateManyOwnerInputEnvelope
    connect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
  }

  export type GardenUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<GardenCreateWithoutOwnerInput, GardenUncheckedCreateWithoutOwnerInput> | GardenCreateWithoutOwnerInput[] | GardenUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GardenCreateOrConnectWithoutOwnerInput | GardenCreateOrConnectWithoutOwnerInput[]
    createMany?: GardenCreateManyOwnerInputEnvelope
    connect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GardenUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GardenCreateWithoutOwnerInput, GardenUncheckedCreateWithoutOwnerInput> | GardenCreateWithoutOwnerInput[] | GardenUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GardenCreateOrConnectWithoutOwnerInput | GardenCreateOrConnectWithoutOwnerInput[]
    upsert?: GardenUpsertWithWhereUniqueWithoutOwnerInput | GardenUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GardenCreateManyOwnerInputEnvelope
    set?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    disconnect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    delete?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    connect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    update?: GardenUpdateWithWhereUniqueWithoutOwnerInput | GardenUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GardenUpdateManyWithWhereWithoutOwnerInput | GardenUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GardenScalarWhereInput | GardenScalarWhereInput[]
  }

  export type GardenUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<GardenCreateWithoutOwnerInput, GardenUncheckedCreateWithoutOwnerInput> | GardenCreateWithoutOwnerInput[] | GardenUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: GardenCreateOrConnectWithoutOwnerInput | GardenCreateOrConnectWithoutOwnerInput[]
    upsert?: GardenUpsertWithWhereUniqueWithoutOwnerInput | GardenUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: GardenCreateManyOwnerInputEnvelope
    set?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    disconnect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    delete?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    connect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    update?: GardenUpdateWithWhereUniqueWithoutOwnerInput | GardenUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: GardenUpdateManyWithWhereWithoutOwnerInput | GardenUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: GardenScalarWhereInput | GardenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGardensInput = {
    create?: XOR<UserCreateWithoutGardensInput, UserUncheckedCreateWithoutGardensInput>
    connectOrCreate?: UserCreateOrConnectWithoutGardensInput
    connect?: UserWhereUniqueInput
  }

  export type PlantCreateNestedManyWithoutGardenInput = {
    create?: XOR<PlantCreateWithoutGardenInput, PlantUncheckedCreateWithoutGardenInput> | PlantCreateWithoutGardenInput[] | PlantUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: PlantCreateOrConnectWithoutGardenInput | PlantCreateOrConnectWithoutGardenInput[]
    createMany?: PlantCreateManyGardenInputEnvelope
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
  }

  export type PlantUncheckedCreateNestedManyWithoutGardenInput = {
    create?: XOR<PlantCreateWithoutGardenInput, PlantUncheckedCreateWithoutGardenInput> | PlantCreateWithoutGardenInput[] | PlantUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: PlantCreateOrConnectWithoutGardenInput | PlantCreateOrConnectWithoutGardenInput[]
    createMany?: PlantCreateManyGardenInputEnvelope
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutGardensNestedInput = {
    create?: XOR<UserCreateWithoutGardensInput, UserUncheckedCreateWithoutGardensInput>
    connectOrCreate?: UserCreateOrConnectWithoutGardensInput
    upsert?: UserUpsertWithoutGardensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGardensInput, UserUpdateWithoutGardensInput>, UserUncheckedUpdateWithoutGardensInput>
  }

  export type PlantUpdateManyWithoutGardenNestedInput = {
    create?: XOR<PlantCreateWithoutGardenInput, PlantUncheckedCreateWithoutGardenInput> | PlantCreateWithoutGardenInput[] | PlantUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: PlantCreateOrConnectWithoutGardenInput | PlantCreateOrConnectWithoutGardenInput[]
    upsert?: PlantUpsertWithWhereUniqueWithoutGardenInput | PlantUpsertWithWhereUniqueWithoutGardenInput[]
    createMany?: PlantCreateManyGardenInputEnvelope
    set?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    disconnect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    delete?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    update?: PlantUpdateWithWhereUniqueWithoutGardenInput | PlantUpdateWithWhereUniqueWithoutGardenInput[]
    updateMany?: PlantUpdateManyWithWhereWithoutGardenInput | PlantUpdateManyWithWhereWithoutGardenInput[]
    deleteMany?: PlantScalarWhereInput | PlantScalarWhereInput[]
  }

  export type PlantUncheckedUpdateManyWithoutGardenNestedInput = {
    create?: XOR<PlantCreateWithoutGardenInput, PlantUncheckedCreateWithoutGardenInput> | PlantCreateWithoutGardenInput[] | PlantUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: PlantCreateOrConnectWithoutGardenInput | PlantCreateOrConnectWithoutGardenInput[]
    upsert?: PlantUpsertWithWhereUniqueWithoutGardenInput | PlantUpsertWithWhereUniqueWithoutGardenInput[]
    createMany?: PlantCreateManyGardenInputEnvelope
    set?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    disconnect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    delete?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    connect?: PlantWhereUniqueInput | PlantWhereUniqueInput[]
    update?: PlantUpdateWithWhereUniqueWithoutGardenInput | PlantUpdateWithWhereUniqueWithoutGardenInput[]
    updateMany?: PlantUpdateManyWithWhereWithoutGardenInput | PlantUpdateManyWithWhereWithoutGardenInput[]
    deleteMany?: PlantScalarWhereInput | PlantScalarWhereInput[]
  }

  export type PlantCreatecommentsInput = {
    set: string[]
  }

  export type PlantCreateusesInput = {
    set: string[]
  }

  export type AtributeCreateNestedManyWithoutPlantInput = {
    create?: XOR<AtributeCreateWithoutPlantInput, AtributeUncheckedCreateWithoutPlantInput> | AtributeCreateWithoutPlantInput[] | AtributeUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: AtributeCreateOrConnectWithoutPlantInput | AtributeCreateOrConnectWithoutPlantInput[]
    createMany?: AtributeCreateManyPlantInputEnvelope
    connect?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
  }

  export type GardenCreateNestedOneWithoutPlantsInput = {
    create?: XOR<GardenCreateWithoutPlantsInput, GardenUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: GardenCreateOrConnectWithoutPlantsInput
    connect?: GardenWhereUniqueInput
  }

  export type AtributeUncheckedCreateNestedManyWithoutPlantInput = {
    create?: XOR<AtributeCreateWithoutPlantInput, AtributeUncheckedCreateWithoutPlantInput> | AtributeCreateWithoutPlantInput[] | AtributeUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: AtributeCreateOrConnectWithoutPlantInput | AtributeCreateOrConnectWithoutPlantInput[]
    createMany?: AtributeCreateManyPlantInputEnvelope
    connect?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
  }

  export type PlantUpdatecommentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlantUpdateusesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AtributeUpdateManyWithoutPlantNestedInput = {
    create?: XOR<AtributeCreateWithoutPlantInput, AtributeUncheckedCreateWithoutPlantInput> | AtributeCreateWithoutPlantInput[] | AtributeUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: AtributeCreateOrConnectWithoutPlantInput | AtributeCreateOrConnectWithoutPlantInput[]
    upsert?: AtributeUpsertWithWhereUniqueWithoutPlantInput | AtributeUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: AtributeCreateManyPlantInputEnvelope
    set?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
    disconnect?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
    delete?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
    connect?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
    update?: AtributeUpdateWithWhereUniqueWithoutPlantInput | AtributeUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: AtributeUpdateManyWithWhereWithoutPlantInput | AtributeUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: AtributeScalarWhereInput | AtributeScalarWhereInput[]
  }

  export type GardenUpdateOneRequiredWithoutPlantsNestedInput = {
    create?: XOR<GardenCreateWithoutPlantsInput, GardenUncheckedCreateWithoutPlantsInput>
    connectOrCreate?: GardenCreateOrConnectWithoutPlantsInput
    upsert?: GardenUpsertWithoutPlantsInput
    connect?: GardenWhereUniqueInput
    update?: XOR<XOR<GardenUpdateToOneWithWhereWithoutPlantsInput, GardenUpdateWithoutPlantsInput>, GardenUncheckedUpdateWithoutPlantsInput>
  }

  export type AtributeUncheckedUpdateManyWithoutPlantNestedInput = {
    create?: XOR<AtributeCreateWithoutPlantInput, AtributeUncheckedCreateWithoutPlantInput> | AtributeCreateWithoutPlantInput[] | AtributeUncheckedCreateWithoutPlantInput[]
    connectOrCreate?: AtributeCreateOrConnectWithoutPlantInput | AtributeCreateOrConnectWithoutPlantInput[]
    upsert?: AtributeUpsertWithWhereUniqueWithoutPlantInput | AtributeUpsertWithWhereUniqueWithoutPlantInput[]
    createMany?: AtributeCreateManyPlantInputEnvelope
    set?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
    disconnect?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
    delete?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
    connect?: AtributeWhereUniqueInput | AtributeWhereUniqueInput[]
    update?: AtributeUpdateWithWhereUniqueWithoutPlantInput | AtributeUpdateWithWhereUniqueWithoutPlantInput[]
    updateMany?: AtributeUpdateManyWithWhereWithoutPlantInput | AtributeUpdateManyWithWhereWithoutPlantInput[]
    deleteMany?: AtributeScalarWhereInput | AtributeScalarWhereInput[]
  }

  export type AtributeCreateinformationInput = {
    set: string[]
  }

  export type PlantCreateNestedOneWithoutOtherInput = {
    create?: XOR<PlantCreateWithoutOtherInput, PlantUncheckedCreateWithoutOtherInput>
    connectOrCreate?: PlantCreateOrConnectWithoutOtherInput
    connect?: PlantWhereUniqueInput
  }

  export type AtributeUpdateinformationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlantUpdateOneRequiredWithoutOtherNestedInput = {
    create?: XOR<PlantCreateWithoutOtherInput, PlantUncheckedCreateWithoutOtherInput>
    connectOrCreate?: PlantCreateOrConnectWithoutOtherInput
    upsert?: PlantUpsertWithoutOtherInput
    connect?: PlantWhereUniqueInput
    update?: XOR<XOR<PlantUpdateToOneWithWhereWithoutOtherInput, PlantUpdateWithoutOtherInput>, PlantUncheckedUpdateWithoutOtherInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GardenCreateWithoutOwnerInput = {
    id?: string
    name: string
    visibility: boolean
    plants?: PlantCreateNestedManyWithoutGardenInput
  }

  export type GardenUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    visibility: boolean
    plants?: PlantUncheckedCreateNestedManyWithoutGardenInput
  }

  export type GardenCreateOrConnectWithoutOwnerInput = {
    where: GardenWhereUniqueInput
    create: XOR<GardenCreateWithoutOwnerInput, GardenUncheckedCreateWithoutOwnerInput>
  }

  export type GardenCreateManyOwnerInputEnvelope = {
    data: GardenCreateManyOwnerInput | GardenCreateManyOwnerInput[]
  }

  export type GardenUpsertWithWhereUniqueWithoutOwnerInput = {
    where: GardenWhereUniqueInput
    update: XOR<GardenUpdateWithoutOwnerInput, GardenUncheckedUpdateWithoutOwnerInput>
    create: XOR<GardenCreateWithoutOwnerInput, GardenUncheckedCreateWithoutOwnerInput>
  }

  export type GardenUpdateWithWhereUniqueWithoutOwnerInput = {
    where: GardenWhereUniqueInput
    data: XOR<GardenUpdateWithoutOwnerInput, GardenUncheckedUpdateWithoutOwnerInput>
  }

  export type GardenUpdateManyWithWhereWithoutOwnerInput = {
    where: GardenScalarWhereInput
    data: XOR<GardenUpdateManyMutationInput, GardenUncheckedUpdateManyWithoutOwnerInput>
  }

  export type GardenScalarWhereInput = {
    AND?: GardenScalarWhereInput | GardenScalarWhereInput[]
    OR?: GardenScalarWhereInput[]
    NOT?: GardenScalarWhereInput | GardenScalarWhereInput[]
    id?: StringFilter<"Garden"> | string
    name?: StringFilter<"Garden"> | string
    visibility?: BoolFilter<"Garden"> | boolean
    ownerId?: StringFilter<"Garden"> | string
  }

  export type UserCreateWithoutGardensInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserUncheckedCreateWithoutGardensInput = {
    id?: string
    email: string
    name: string
    password: string
  }

  export type UserCreateOrConnectWithoutGardensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGardensInput, UserUncheckedCreateWithoutGardensInput>
  }

  export type PlantCreateWithoutGardenInput = {
    id?: string
    name: string
    genus: string
    planting: string
    comments?: PlantCreatecommentsInput | string[]
    habitat: string
    uses?: PlantCreateusesInput | string[]
    sun: string
    water: string
    other?: AtributeCreateNestedManyWithoutPlantInput
  }

  export type PlantUncheckedCreateWithoutGardenInput = {
    id?: string
    name: string
    genus: string
    planting: string
    comments?: PlantCreatecommentsInput | string[]
    habitat: string
    uses?: PlantCreateusesInput | string[]
    sun: string
    water: string
    other?: AtributeUncheckedCreateNestedManyWithoutPlantInput
  }

  export type PlantCreateOrConnectWithoutGardenInput = {
    where: PlantWhereUniqueInput
    create: XOR<PlantCreateWithoutGardenInput, PlantUncheckedCreateWithoutGardenInput>
  }

  export type PlantCreateManyGardenInputEnvelope = {
    data: PlantCreateManyGardenInput | PlantCreateManyGardenInput[]
  }

  export type UserUpsertWithoutGardensInput = {
    update: XOR<UserUpdateWithoutGardensInput, UserUncheckedUpdateWithoutGardensInput>
    create: XOR<UserCreateWithoutGardensInput, UserUncheckedCreateWithoutGardensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGardensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGardensInput, UserUncheckedUpdateWithoutGardensInput>
  }

  export type UserUpdateWithoutGardensInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutGardensInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PlantUpsertWithWhereUniqueWithoutGardenInput = {
    where: PlantWhereUniqueInput
    update: XOR<PlantUpdateWithoutGardenInput, PlantUncheckedUpdateWithoutGardenInput>
    create: XOR<PlantCreateWithoutGardenInput, PlantUncheckedCreateWithoutGardenInput>
  }

  export type PlantUpdateWithWhereUniqueWithoutGardenInput = {
    where: PlantWhereUniqueInput
    data: XOR<PlantUpdateWithoutGardenInput, PlantUncheckedUpdateWithoutGardenInput>
  }

  export type PlantUpdateManyWithWhereWithoutGardenInput = {
    where: PlantScalarWhereInput
    data: XOR<PlantUpdateManyMutationInput, PlantUncheckedUpdateManyWithoutGardenInput>
  }

  export type PlantScalarWhereInput = {
    AND?: PlantScalarWhereInput | PlantScalarWhereInput[]
    OR?: PlantScalarWhereInput[]
    NOT?: PlantScalarWhereInput | PlantScalarWhereInput[]
    id?: StringFilter<"Plant"> | string
    name?: StringFilter<"Plant"> | string
    genus?: StringFilter<"Plant"> | string
    planting?: StringFilter<"Plant"> | string
    comments?: StringNullableListFilter<"Plant">
    habitat?: StringFilter<"Plant"> | string
    uses?: StringNullableListFilter<"Plant">
    sun?: StringFilter<"Plant"> | string
    water?: StringFilter<"Plant"> | string
    gardenId?: StringFilter<"Plant"> | string
  }

  export type AtributeCreateWithoutPlantInput = {
    id?: string
    title: string
    information?: AtributeCreateinformationInput | string[]
  }

  export type AtributeUncheckedCreateWithoutPlantInput = {
    id?: string
    title: string
    information?: AtributeCreateinformationInput | string[]
  }

  export type AtributeCreateOrConnectWithoutPlantInput = {
    where: AtributeWhereUniqueInput
    create: XOR<AtributeCreateWithoutPlantInput, AtributeUncheckedCreateWithoutPlantInput>
  }

  export type AtributeCreateManyPlantInputEnvelope = {
    data: AtributeCreateManyPlantInput | AtributeCreateManyPlantInput[]
  }

  export type GardenCreateWithoutPlantsInput = {
    id?: string
    name: string
    visibility: boolean
    owner: UserCreateNestedOneWithoutGardensInput
  }

  export type GardenUncheckedCreateWithoutPlantsInput = {
    id?: string
    name: string
    visibility: boolean
    ownerId: string
  }

  export type GardenCreateOrConnectWithoutPlantsInput = {
    where: GardenWhereUniqueInput
    create: XOR<GardenCreateWithoutPlantsInput, GardenUncheckedCreateWithoutPlantsInput>
  }

  export type AtributeUpsertWithWhereUniqueWithoutPlantInput = {
    where: AtributeWhereUniqueInput
    update: XOR<AtributeUpdateWithoutPlantInput, AtributeUncheckedUpdateWithoutPlantInput>
    create: XOR<AtributeCreateWithoutPlantInput, AtributeUncheckedCreateWithoutPlantInput>
  }

  export type AtributeUpdateWithWhereUniqueWithoutPlantInput = {
    where: AtributeWhereUniqueInput
    data: XOR<AtributeUpdateWithoutPlantInput, AtributeUncheckedUpdateWithoutPlantInput>
  }

  export type AtributeUpdateManyWithWhereWithoutPlantInput = {
    where: AtributeScalarWhereInput
    data: XOR<AtributeUpdateManyMutationInput, AtributeUncheckedUpdateManyWithoutPlantInput>
  }

  export type AtributeScalarWhereInput = {
    AND?: AtributeScalarWhereInput | AtributeScalarWhereInput[]
    OR?: AtributeScalarWhereInput[]
    NOT?: AtributeScalarWhereInput | AtributeScalarWhereInput[]
    id?: StringFilter<"Atribute"> | string
    title?: StringFilter<"Atribute"> | string
    information?: StringNullableListFilter<"Atribute">
    plantId?: StringFilter<"Atribute"> | string
  }

  export type GardenUpsertWithoutPlantsInput = {
    update: XOR<GardenUpdateWithoutPlantsInput, GardenUncheckedUpdateWithoutPlantsInput>
    create: XOR<GardenCreateWithoutPlantsInput, GardenUncheckedCreateWithoutPlantsInput>
    where?: GardenWhereInput
  }

  export type GardenUpdateToOneWithWhereWithoutPlantsInput = {
    where?: GardenWhereInput
    data: XOR<GardenUpdateWithoutPlantsInput, GardenUncheckedUpdateWithoutPlantsInput>
  }

  export type GardenUpdateWithoutPlantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutGardensNestedInput
  }

  export type GardenUncheckedUpdateWithoutPlantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type PlantCreateWithoutOtherInput = {
    id?: string
    name: string
    genus: string
    planting: string
    comments?: PlantCreatecommentsInput | string[]
    habitat: string
    uses?: PlantCreateusesInput | string[]
    sun: string
    water: string
    garden: GardenCreateNestedOneWithoutPlantsInput
  }

  export type PlantUncheckedCreateWithoutOtherInput = {
    id?: string
    name: string
    genus: string
    planting: string
    comments?: PlantCreatecommentsInput | string[]
    habitat: string
    uses?: PlantCreateusesInput | string[]
    sun: string
    water: string
    gardenId: string
  }

  export type PlantCreateOrConnectWithoutOtherInput = {
    where: PlantWhereUniqueInput
    create: XOR<PlantCreateWithoutOtherInput, PlantUncheckedCreateWithoutOtherInput>
  }

  export type PlantUpsertWithoutOtherInput = {
    update: XOR<PlantUpdateWithoutOtherInput, PlantUncheckedUpdateWithoutOtherInput>
    create: XOR<PlantCreateWithoutOtherInput, PlantUncheckedCreateWithoutOtherInput>
    where?: PlantWhereInput
  }

  export type PlantUpdateToOneWithWhereWithoutOtherInput = {
    where?: PlantWhereInput
    data: XOR<PlantUpdateWithoutOtherInput, PlantUncheckedUpdateWithoutOtherInput>
  }

  export type PlantUpdateWithoutOtherInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
    garden?: GardenUpdateOneRequiredWithoutPlantsNestedInput
  }

  export type PlantUncheckedUpdateWithoutOtherInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
    gardenId?: StringFieldUpdateOperationsInput | string
  }

  export type GardenCreateManyOwnerInput = {
    id?: string
    name: string
    visibility: boolean
  }

  export type GardenUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
    plants?: PlantUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
    plants?: PlantUncheckedUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateManyWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    visibility?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlantCreateManyGardenInput = {
    id?: string
    name: string
    genus: string
    planting: string
    comments?: PlantCreatecommentsInput | string[]
    habitat: string
    uses?: PlantCreateusesInput | string[]
    sun: string
    water: string
  }

  export type PlantUpdateWithoutGardenInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
    other?: AtributeUpdateManyWithoutPlantNestedInput
  }

  export type PlantUncheckedUpdateWithoutGardenInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
    other?: AtributeUncheckedUpdateManyWithoutPlantNestedInput
  }

  export type PlantUncheckedUpdateManyWithoutGardenInput = {
    name?: StringFieldUpdateOperationsInput | string
    genus?: StringFieldUpdateOperationsInput | string
    planting?: StringFieldUpdateOperationsInput | string
    comments?: PlantUpdatecommentsInput | string[]
    habitat?: StringFieldUpdateOperationsInput | string
    uses?: PlantUpdateusesInput | string[]
    sun?: StringFieldUpdateOperationsInput | string
    water?: StringFieldUpdateOperationsInput | string
  }

  export type AtributeCreateManyPlantInput = {
    id?: string
    title: string
    information?: AtributeCreateinformationInput | string[]
  }

  export type AtributeUpdateWithoutPlantInput = {
    title?: StringFieldUpdateOperationsInput | string
    information?: AtributeUpdateinformationInput | string[]
  }

  export type AtributeUncheckedUpdateWithoutPlantInput = {
    title?: StringFieldUpdateOperationsInput | string
    information?: AtributeUpdateinformationInput | string[]
  }

  export type AtributeUncheckedUpdateManyWithoutPlantInput = {
    title?: StringFieldUpdateOperationsInput | string
    information?: AtributeUpdateinformationInput | string[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}