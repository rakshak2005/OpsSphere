
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model InventoryMovement
 * 
 */
export type InventoryMovement = $Result.DefaultSelection<Prisma.$InventoryMovementPayload>
/**
 * Model Challan
 * 
 */
export type Challan = $Result.DefaultSelection<Prisma.$ChallanPayload>
/**
 * Model ChallanItem
 * 
 */
export type ChallanItem = $Result.DefaultSelection<Prisma.$ChallanItemPayload>
/**
 * Model UserActivity
 * 
 */
export type UserActivity = $Result.DefaultSelection<Prisma.$UserActivityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  SALES: 'SALES',
  WAREHOUSE: 'WAREHOUSE',
  ACCOUNTS: 'ACCOUNTS'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CustomerType: {
  RETAIL: 'RETAIL',
  WHOLESALE: 'WHOLESALE',
  DISTRIBUTOR: 'DISTRIBUTOR'
};

export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType]


export const CustomerStatus: {
  LEAD: 'LEAD',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type CustomerStatus = (typeof CustomerStatus)[keyof typeof CustomerStatus]


export const MovementType: {
  IN: 'IN',
  OUT: 'OUT'
};

export type MovementType = (typeof MovementType)[keyof typeof MovementType]


export const ChallanStatus: {
  DRAFT: 'DRAFT',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type ChallanStatus = (typeof ChallanStatus)[keyof typeof ChallanStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CustomerType = $Enums.CustomerType

export const CustomerType: typeof $Enums.CustomerType

export type CustomerStatus = $Enums.CustomerStatus

export const CustomerStatus: typeof $Enums.CustomerStatus

export type MovementType = $Enums.MovementType

export const MovementType: typeof $Enums.MovementType

export type ChallanStatus = $Enums.ChallanStatus

export const ChallanStatus: typeof $Enums.ChallanStatus

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.inventoryMovement`: Exposes CRUD operations for the **InventoryMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryMovements
    * const inventoryMovements = await prisma.inventoryMovement.findMany()
    * ```
    */
  get inventoryMovement(): Prisma.InventoryMovementDelegate<ExtArgs>;

  /**
   * `prisma.challan`: Exposes CRUD operations for the **Challan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challans
    * const challans = await prisma.challan.findMany()
    * ```
    */
  get challan(): Prisma.ChallanDelegate<ExtArgs>;

  /**
   * `prisma.challanItem`: Exposes CRUD operations for the **ChallanItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChallanItems
    * const challanItems = await prisma.challanItem.findMany()
    * ```
    */
  get challanItem(): Prisma.ChallanItemDelegate<ExtArgs>;

  /**
   * `prisma.userActivity`: Exposes CRUD operations for the **UserActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserActivities
    * const userActivities = await prisma.userActivity.findMany()
    * ```
    */
  get userActivity(): Prisma.UserActivityDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Customer: 'Customer',
    Product: 'Product',
    InventoryMovement: 'InventoryMovement',
    Challan: 'Challan',
    ChallanItem: 'ChallanItem',
    UserActivity: 'UserActivity'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "customer" | "product" | "inventoryMovement" | "challan" | "challanItem" | "userActivity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
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
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      InventoryMovement: {
        payload: Prisma.$InventoryMovementPayload<ExtArgs>
        fields: Prisma.InventoryMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          findFirst: {
            args: Prisma.InventoryMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          findMany: {
            args: Prisma.InventoryMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          create: {
            args: Prisma.InventoryMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          createMany: {
            args: Prisma.InventoryMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>[]
          }
          delete: {
            args: Prisma.InventoryMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          update: {
            args: Prisma.InventoryMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          deleteMany: {
            args: Prisma.InventoryMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryMovementPayload>
          }
          aggregate: {
            args: Prisma.InventoryMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryMovement>
          }
          groupBy: {
            args: Prisma.InventoryMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryMovementCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryMovementCountAggregateOutputType> | number
          }
        }
      }
      Challan: {
        payload: Prisma.$ChallanPayload<ExtArgs>
        fields: Prisma.ChallanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload>
          }
          findFirst: {
            args: Prisma.ChallanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload>
          }
          findMany: {
            args: Prisma.ChallanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload>[]
          }
          create: {
            args: Prisma.ChallanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload>
          }
          createMany: {
            args: Prisma.ChallanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload>[]
          }
          delete: {
            args: Prisma.ChallanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload>
          }
          update: {
            args: Prisma.ChallanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload>
          }
          deleteMany: {
            args: Prisma.ChallanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChallanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanPayload>
          }
          aggregate: {
            args: Prisma.ChallanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallan>
          }
          groupBy: {
            args: Prisma.ChallanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallanCountArgs<ExtArgs>
            result: $Utils.Optional<ChallanCountAggregateOutputType> | number
          }
        }
      }
      ChallanItem: {
        payload: Prisma.$ChallanItemPayload<ExtArgs>
        fields: Prisma.ChallanItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChallanItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChallanItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload>
          }
          findFirst: {
            args: Prisma.ChallanItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChallanItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload>
          }
          findMany: {
            args: Prisma.ChallanItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload>[]
          }
          create: {
            args: Prisma.ChallanItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload>
          }
          createMany: {
            args: Prisma.ChallanItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChallanItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload>[]
          }
          delete: {
            args: Prisma.ChallanItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload>
          }
          update: {
            args: Prisma.ChallanItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload>
          }
          deleteMany: {
            args: Prisma.ChallanItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChallanItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChallanItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChallanItemPayload>
          }
          aggregate: {
            args: Prisma.ChallanItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallanItem>
          }
          groupBy: {
            args: Prisma.ChallanItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallanItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChallanItemCountArgs<ExtArgs>
            result: $Utils.Optional<ChallanItemCountAggregateOutputType> | number
          }
        }
      }
      UserActivity: {
        payload: Prisma.$UserActivityPayload<ExtArgs>
        fields: Prisma.UserActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          findFirst: {
            args: Prisma.UserActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          findMany: {
            args: Prisma.UserActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>[]
          }
          create: {
            args: Prisma.UserActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          createMany: {
            args: Prisma.UserActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>[]
          }
          delete: {
            args: Prisma.UserActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          update: {
            args: Prisma.UserActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          deleteMany: {
            args: Prisma.UserActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserActivityPayload>
          }
          aggregate: {
            args: Prisma.UserActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserActivity>
          }
          groupBy: {
            args: Prisma.UserActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserActivityCountArgs<ExtArgs>
            result: $Utils.Optional<UserActivityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    movements: number
    challans: number
    activities: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | UserCountOutputTypeCountMovementsArgs
    challans?: boolean | UserCountOutputTypeCountChallansArgs
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
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
  export type UserCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChallansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallanWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActivityWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    challans: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challans?: boolean | CustomerCountOutputTypeCountChallansArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountChallansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallanWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    movements: number
    challanItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | ProductCountOutputTypeCountMovementsArgs
    challanItems?: boolean | ProductCountOutputTypeCountChallanItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountChallanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallanItemWhereInput
  }


  /**
   * Count Type ChallanCountOutputType
   */

  export type ChallanCountOutputType = {
    items: number
  }

  export type ChallanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ChallanCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ChallanCountOutputType without action
   */
  export type ChallanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanCountOutputType
     */
    select?: ChallanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallanCountOutputType without action
   */
  export type ChallanCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallanItemWhereInput
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
    name: string | null
    email: string | null
    password: string | null
    secretCode: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    secretCode: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    secretCode: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    secretCode?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    secretCode?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    secretCode?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    email: string
    password: string
    secretCode: string | null
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    email?: boolean
    password?: boolean
    secretCode?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movements?: boolean | User$movementsArgs<ExtArgs>
    challans?: boolean | User$challansArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    secretCode?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    secretCode?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | User$movementsArgs<ExtArgs>
    challans?: boolean | User$challansArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      movements: Prisma.$InventoryMovementPayload<ExtArgs>[]
      challans: Prisma.$ChallanPayload<ExtArgs>[]
      activities: Prisma.$UserActivityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      secretCode: string | null
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movements<T extends User$movementsArgs<ExtArgs> = {}>(args?: Subset<T, User$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany"> | Null>
    challans<T extends User$challansArgs<ExtArgs> = {}>(args?: Subset<T, User$challansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "findMany"> | Null>
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly secretCode: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
  }

  /**
   * User.movements
   */
  export type User$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    cursor?: InventoryMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * User.challans
   */
  export type User$challansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    where?: ChallanWhereInput
    orderBy?: ChallanOrderByWithRelationInput | ChallanOrderByWithRelationInput[]
    cursor?: ChallanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallanScalarFieldEnum | ChallanScalarFieldEnum[]
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    where?: UserActivityWhereInput
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    cursor?: UserActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    customerName: string | null
    mobile: string | null
    email: string | null
    businessName: string | null
    gstNumber: string | null
    customerType: $Enums.CustomerType | null
    address: string | null
    status: $Enums.CustomerStatus | null
    followUpDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    customerName: string | null
    mobile: string | null
    email: string | null
    businessName: string | null
    gstNumber: string | null
    customerType: $Enums.CustomerType | null
    address: string | null
    status: $Enums.CustomerStatus | null
    followUpDate: Date | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    customerName: number
    mobile: number
    email: number
    businessName: number
    gstNumber: number
    customerType: number
    address: number
    status: number
    followUpDate: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    customerName?: true
    mobile?: true
    email?: true
    businessName?: true
    gstNumber?: true
    customerType?: true
    address?: true
    status?: true
    followUpDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    customerName?: true
    mobile?: true
    email?: true
    businessName?: true
    gstNumber?: true
    customerType?: true
    address?: true
    status?: true
    followUpDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    customerName?: true
    mobile?: true
    email?: true
    businessName?: true
    gstNumber?: true
    customerType?: true
    address?: true
    status?: true
    followUpDate?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    customerName: string
    mobile: string
    email: string
    businessName: string | null
    gstNumber: string | null
    customerType: $Enums.CustomerType
    address: string
    status: $Enums.CustomerStatus
    followUpDate: Date | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    mobile?: boolean
    email?: boolean
    businessName?: boolean
    gstNumber?: boolean
    customerType?: boolean
    address?: boolean
    status?: boolean
    followUpDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    challans?: boolean | Customer$challansArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerName?: boolean
    mobile?: boolean
    email?: boolean
    businessName?: boolean
    gstNumber?: boolean
    customerType?: boolean
    address?: boolean
    status?: boolean
    followUpDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    customerName?: boolean
    mobile?: boolean
    email?: boolean
    businessName?: boolean
    gstNumber?: boolean
    customerType?: boolean
    address?: boolean
    status?: boolean
    followUpDate?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challans?: boolean | Customer$challansArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      challans: Prisma.$ChallanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerName: string
      mobile: string
      email: string
      businessName: string | null
      gstNumber: string | null
      customerType: $Enums.CustomerType
      address: string
      status: $Enums.CustomerStatus
      followUpDate: Date | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challans<T extends Customer$challansArgs<ExtArgs> = {}>(args?: Subset<T, Customer$challansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly customerName: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly businessName: FieldRef<"Customer", 'String'>
    readonly gstNumber: FieldRef<"Customer", 'String'>
    readonly customerType: FieldRef<"Customer", 'CustomerType'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly status: FieldRef<"Customer", 'CustomerStatus'>
    readonly followUpDate: FieldRef<"Customer", 'DateTime'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.challans
   */
  export type Customer$challansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    where?: ChallanWhereInput
    orderBy?: ChallanOrderByWithRelationInput | ChallanOrderByWithRelationInput[]
    cursor?: ChallanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallanScalarFieldEnum | ChallanScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    unitPrice: number | null
    currentStock: number | null
    minimumStock: number | null
  }

  export type ProductSumAggregateOutputType = {
    unitPrice: number | null
    currentStock: number | null
    minimumStock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    productName: string | null
    sku: string | null
    category: string | null
    unitPrice: number | null
    currentStock: number | null
    minimumStock: number | null
    warehouseLocation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    productName: string | null
    sku: string | null
    category: string | null
    unitPrice: number | null
    currentStock: number | null
    minimumStock: number | null
    warehouseLocation: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    productName: number
    sku: number
    category: number
    unitPrice: number
    currentStock: number
    minimumStock: number
    warehouseLocation: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    unitPrice?: true
    currentStock?: true
    minimumStock?: true
  }

  export type ProductSumAggregateInputType = {
    unitPrice?: true
    currentStock?: true
    minimumStock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    productName?: true
    sku?: true
    category?: true
    unitPrice?: true
    currentStock?: true
    minimumStock?: true
    warehouseLocation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    productName?: true
    sku?: true
    category?: true
    unitPrice?: true
    currentStock?: true
    minimumStock?: true
    warehouseLocation?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    productName?: true
    sku?: true
    category?: true
    unitPrice?: true
    currentStock?: true
    minimumStock?: true
    warehouseLocation?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    productName: string
    sku: string
    category: string
    unitPrice: number
    currentStock: number
    minimumStock: number
    warehouseLocation: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    sku?: boolean
    category?: boolean
    unitPrice?: boolean
    currentStock?: boolean
    minimumStock?: boolean
    warehouseLocation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movements?: boolean | Product$movementsArgs<ExtArgs>
    challanItems?: boolean | Product$challanItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productName?: boolean
    sku?: boolean
    category?: boolean
    unitPrice?: boolean
    currentStock?: boolean
    minimumStock?: boolean
    warehouseLocation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    productName?: boolean
    sku?: boolean
    category?: boolean
    unitPrice?: boolean
    currentStock?: boolean
    minimumStock?: boolean
    warehouseLocation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | Product$movementsArgs<ExtArgs>
    challanItems?: boolean | Product$challanItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      movements: Prisma.$InventoryMovementPayload<ExtArgs>[]
      challanItems: Prisma.$ChallanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productName: string
      sku: string
      category: string
      unitPrice: number
      currentStock: number
      minimumStock: number
      warehouseLocation: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movements<T extends Product$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Product$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany"> | Null>
    challanItems<T extends Product$challanItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$challanItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly productName: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly unitPrice: FieldRef<"Product", 'Float'>
    readonly currentStock: FieldRef<"Product", 'Int'>
    readonly minimumStock: FieldRef<"Product", 'Int'>
    readonly warehouseLocation: FieldRef<"Product", 'String'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.movements
   */
  export type Product$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    cursor?: InventoryMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * Product.challanItems
   */
  export type Product$challanItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    where?: ChallanItemWhereInput
    orderBy?: ChallanItemOrderByWithRelationInput | ChallanItemOrderByWithRelationInput[]
    cursor?: ChallanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallanItemScalarFieldEnum | ChallanItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model InventoryMovement
   */

  export type AggregateInventoryMovement = {
    _count: InventoryMovementCountAggregateOutputType | null
    _avg: InventoryMovementAvgAggregateOutputType | null
    _sum: InventoryMovementSumAggregateOutputType | null
    _min: InventoryMovementMinAggregateOutputType | null
    _max: InventoryMovementMaxAggregateOutputType | null
  }

  export type InventoryMovementAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryMovementSumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryMovementMinAggregateOutputType = {
    id: string | null
    productId: string | null
    quantity: number | null
    type: $Enums.MovementType | null
    reason: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type InventoryMovementMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    quantity: number | null
    type: $Enums.MovementType | null
    reason: string | null
    createdById: string | null
    createdAt: Date | null
  }

  export type InventoryMovementCountAggregateOutputType = {
    id: number
    productId: number
    quantity: number
    type: number
    reason: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type InventoryMovementAvgAggregateInputType = {
    quantity?: true
  }

  export type InventoryMovementSumAggregateInputType = {
    quantity?: true
  }

  export type InventoryMovementMinAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    type?: true
    reason?: true
    createdById?: true
    createdAt?: true
  }

  export type InventoryMovementMaxAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    type?: true
    reason?: true
    createdById?: true
    createdAt?: true
  }

  export type InventoryMovementCountAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    type?: true
    reason?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryMovement to aggregate.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryMovements
    **/
    _count?: true | InventoryMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMovementMaxAggregateInputType
  }

  export type GetInventoryMovementAggregateType<T extends InventoryMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryMovement[P]>
      : GetScalarType<T[P], AggregateInventoryMovement[P]>
  }




  export type InventoryMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryMovementWhereInput
    orderBy?: InventoryMovementOrderByWithAggregationInput | InventoryMovementOrderByWithAggregationInput[]
    by: InventoryMovementScalarFieldEnum[] | InventoryMovementScalarFieldEnum
    having?: InventoryMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryMovementCountAggregateInputType | true
    _avg?: InventoryMovementAvgAggregateInputType
    _sum?: InventoryMovementSumAggregateInputType
    _min?: InventoryMovementMinAggregateInputType
    _max?: InventoryMovementMaxAggregateInputType
  }

  export type InventoryMovementGroupByOutputType = {
    id: string
    productId: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdById: string
    createdAt: Date
    _count: InventoryMovementCountAggregateOutputType | null
    _avg: InventoryMovementAvgAggregateOutputType | null
    _sum: InventoryMovementSumAggregateOutputType | null
    _min: InventoryMovementMinAggregateOutputType | null
    _max: InventoryMovementMaxAggregateOutputType | null
  }

  type GetInventoryMovementGroupByPayload<T extends InventoryMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryMovementGroupByOutputType[P]>
        }
      >
    >


  export type InventoryMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    quantity?: boolean
    type?: boolean
    reason?: boolean
    createdById?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    quantity?: boolean
    type?: boolean
    reason?: boolean
    createdById?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryMovement"]>

  export type InventoryMovementSelectScalar = {
    id?: boolean
    productId?: boolean
    quantity?: boolean
    type?: boolean
    reason?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type InventoryMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InventoryMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InventoryMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryMovement"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      quantity: number
      type: $Enums.MovementType
      reason: string
      createdById: string
      createdAt: Date
    }, ExtArgs["result"]["inventoryMovement"]>
    composites: {}
  }

  type InventoryMovementGetPayload<S extends boolean | null | undefined | InventoryMovementDefaultArgs> = $Result.GetResult<Prisma.$InventoryMovementPayload, S>

  type InventoryMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryMovementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryMovementCountAggregateInputType | true
    }

  export interface InventoryMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryMovement'], meta: { name: 'InventoryMovement' } }
    /**
     * Find zero or one InventoryMovement that matches the filter.
     * @param {InventoryMovementFindUniqueArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryMovementFindUniqueArgs>(args: SelectSubset<T, InventoryMovementFindUniqueArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryMovement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryMovementFindUniqueOrThrowArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindFirstArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryMovementFindFirstArgs>(args?: SelectSubset<T, InventoryMovementFindFirstArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindFirstOrThrowArgs} args - Arguments to find a InventoryMovement
     * @example
     * // Get one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryMovements
     * const inventoryMovements = await prisma.inventoryMovement.findMany()
     * 
     * // Get first 10 InventoryMovements
     * const inventoryMovements = await prisma.inventoryMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryMovementFindManyArgs>(args?: SelectSubset<T, InventoryMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryMovement.
     * @param {InventoryMovementCreateArgs} args - Arguments to create a InventoryMovement.
     * @example
     * // Create one InventoryMovement
     * const InventoryMovement = await prisma.inventoryMovement.create({
     *   data: {
     *     // ... data to create a InventoryMovement
     *   }
     * })
     * 
     */
    create<T extends InventoryMovementCreateArgs>(args: SelectSubset<T, InventoryMovementCreateArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryMovements.
     * @param {InventoryMovementCreateManyArgs} args - Arguments to create many InventoryMovements.
     * @example
     * // Create many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryMovementCreateManyArgs>(args?: SelectSubset<T, InventoryMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryMovements and returns the data saved in the database.
     * @param {InventoryMovementCreateManyAndReturnArgs} args - Arguments to create many InventoryMovements.
     * @example
     * // Create many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryMovements and only return the `id`
     * const inventoryMovementWithIdOnly = await prisma.inventoryMovement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryMovement.
     * @param {InventoryMovementDeleteArgs} args - Arguments to delete one InventoryMovement.
     * @example
     * // Delete one InventoryMovement
     * const InventoryMovement = await prisma.inventoryMovement.delete({
     *   where: {
     *     // ... filter to delete one InventoryMovement
     *   }
     * })
     * 
     */
    delete<T extends InventoryMovementDeleteArgs>(args: SelectSubset<T, InventoryMovementDeleteArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryMovement.
     * @param {InventoryMovementUpdateArgs} args - Arguments to update one InventoryMovement.
     * @example
     * // Update one InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryMovementUpdateArgs>(args: SelectSubset<T, InventoryMovementUpdateArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryMovements.
     * @param {InventoryMovementDeleteManyArgs} args - Arguments to filter InventoryMovements to delete.
     * @example
     * // Delete a few InventoryMovements
     * const { count } = await prisma.inventoryMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryMovementDeleteManyArgs>(args?: SelectSubset<T, InventoryMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryMovements
     * const inventoryMovement = await prisma.inventoryMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryMovementUpdateManyArgs>(args: SelectSubset<T, InventoryMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryMovement.
     * @param {InventoryMovementUpsertArgs} args - Arguments to update or create a InventoryMovement.
     * @example
     * // Update or create a InventoryMovement
     * const inventoryMovement = await prisma.inventoryMovement.upsert({
     *   create: {
     *     // ... data to create a InventoryMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryMovement we want to update
     *   }
     * })
     */
    upsert<T extends InventoryMovementUpsertArgs>(args: SelectSubset<T, InventoryMovementUpsertArgs<ExtArgs>>): Prisma__InventoryMovementClient<$Result.GetResult<Prisma.$InventoryMovementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementCountArgs} args - Arguments to filter InventoryMovements to count.
     * @example
     * // Count the number of InventoryMovements
     * const count = await prisma.inventoryMovement.count({
     *   where: {
     *     // ... the filter for the InventoryMovements we want to count
     *   }
     * })
    **/
    count<T extends InventoryMovementCountArgs>(
      args?: Subset<T, InventoryMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryMovementAggregateArgs>(args: Subset<T, InventoryMovementAggregateArgs>): Prisma.PrismaPromise<GetInventoryMovementAggregateType<T>>

    /**
     * Group by InventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryMovementGroupByArgs} args - Group by arguments.
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
      T extends InventoryMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryMovementGroupByArgs['orderBy'] }
        : { orderBy?: InventoryMovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryMovement model
   */
  readonly fields: InventoryMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the InventoryMovement model
   */ 
  interface InventoryMovementFieldRefs {
    readonly id: FieldRef<"InventoryMovement", 'String'>
    readonly productId: FieldRef<"InventoryMovement", 'String'>
    readonly quantity: FieldRef<"InventoryMovement", 'Int'>
    readonly type: FieldRef<"InventoryMovement", 'MovementType'>
    readonly reason: FieldRef<"InventoryMovement", 'String'>
    readonly createdById: FieldRef<"InventoryMovement", 'String'>
    readonly createdAt: FieldRef<"InventoryMovement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryMovement findUnique
   */
  export type InventoryMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement findUniqueOrThrow
   */
  export type InventoryMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement findFirst
   */
  export type InventoryMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement findFirstOrThrow
   */
  export type InventoryMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovement to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryMovements.
     */
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement findMany
   */
  export type InventoryMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter, which InventoryMovements to fetch.
     */
    where?: InventoryMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryMovements to fetch.
     */
    orderBy?: InventoryMovementOrderByWithRelationInput | InventoryMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryMovements.
     */
    cursor?: InventoryMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryMovements.
     */
    skip?: number
    distinct?: InventoryMovementScalarFieldEnum | InventoryMovementScalarFieldEnum[]
  }

  /**
   * InventoryMovement create
   */
  export type InventoryMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryMovement.
     */
    data: XOR<InventoryMovementCreateInput, InventoryMovementUncheckedCreateInput>
  }

  /**
   * InventoryMovement createMany
   */
  export type InventoryMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryMovements.
     */
    data: InventoryMovementCreateManyInput | InventoryMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryMovement createManyAndReturn
   */
  export type InventoryMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryMovements.
     */
    data: InventoryMovementCreateManyInput | InventoryMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryMovement update
   */
  export type InventoryMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryMovement.
     */
    data: XOR<InventoryMovementUpdateInput, InventoryMovementUncheckedUpdateInput>
    /**
     * Choose, which InventoryMovement to update.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement updateMany
   */
  export type InventoryMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryMovements.
     */
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyInput>
    /**
     * Filter which InventoryMovements to update
     */
    where?: InventoryMovementWhereInput
  }

  /**
   * InventoryMovement upsert
   */
  export type InventoryMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryMovement to update in case it exists.
     */
    where: InventoryMovementWhereUniqueInput
    /**
     * In case the InventoryMovement found by the `where` argument doesn't exist, create a new InventoryMovement with this data.
     */
    create: XOR<InventoryMovementCreateInput, InventoryMovementUncheckedCreateInput>
    /**
     * In case the InventoryMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryMovementUpdateInput, InventoryMovementUncheckedUpdateInput>
  }

  /**
   * InventoryMovement delete
   */
  export type InventoryMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
    /**
     * Filter which InventoryMovement to delete.
     */
    where: InventoryMovementWhereUniqueInput
  }

  /**
   * InventoryMovement deleteMany
   */
  export type InventoryMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryMovements to delete
     */
    where?: InventoryMovementWhereInput
  }

  /**
   * InventoryMovement without action
   */
  export type InventoryMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryMovement
     */
    select?: InventoryMovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryMovementInclude<ExtArgs> | null
  }


  /**
   * Model Challan
   */

  export type AggregateChallan = {
    _count: ChallanCountAggregateOutputType | null
    _min: ChallanMinAggregateOutputType | null
    _max: ChallanMaxAggregateOutputType | null
  }

  export type ChallanMinAggregateOutputType = {
    id: string | null
    challanNumber: string | null
    customerId: string | null
    status: $Enums.ChallanStatus | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallanMaxAggregateOutputType = {
    id: string | null
    challanNumber: string | null
    customerId: string | null
    status: $Enums.ChallanStatus | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChallanCountAggregateOutputType = {
    id: number
    challanNumber: number
    customerId: number
    status: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChallanMinAggregateInputType = {
    id?: true
    challanNumber?: true
    customerId?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallanMaxAggregateInputType = {
    id?: true
    challanNumber?: true
    customerId?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChallanCountAggregateInputType = {
    id?: true
    challanNumber?: true
    customerId?: true
    status?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChallanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challan to aggregate.
     */
    where?: ChallanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challans to fetch.
     */
    orderBy?: ChallanOrderByWithRelationInput | ChallanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Challans
    **/
    _count?: true | ChallanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallanMaxAggregateInputType
  }

  export type GetChallanAggregateType<T extends ChallanAggregateArgs> = {
        [P in keyof T & keyof AggregateChallan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallan[P]>
      : GetScalarType<T[P], AggregateChallan[P]>
  }




  export type ChallanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallanWhereInput
    orderBy?: ChallanOrderByWithAggregationInput | ChallanOrderByWithAggregationInput[]
    by: ChallanScalarFieldEnum[] | ChallanScalarFieldEnum
    having?: ChallanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallanCountAggregateInputType | true
    _min?: ChallanMinAggregateInputType
    _max?: ChallanMaxAggregateInputType
  }

  export type ChallanGroupByOutputType = {
    id: string
    challanNumber: string
    customerId: string
    status: $Enums.ChallanStatus
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: ChallanCountAggregateOutputType | null
    _min: ChallanMinAggregateOutputType | null
    _max: ChallanMaxAggregateOutputType | null
  }

  type GetChallanGroupByPayload<T extends ChallanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallanGroupByOutputType[P]>
            : GetScalarType<T[P], ChallanGroupByOutputType[P]>
        }
      >
    >


  export type ChallanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challanNumber?: boolean
    customerId?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Challan$itemsArgs<ExtArgs>
    _count?: boolean | ChallanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challan"]>

  export type ChallanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challanNumber?: boolean
    customerId?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challan"]>

  export type ChallanSelectScalar = {
    id?: boolean
    challanNumber?: boolean
    customerId?: boolean
    status?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChallanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | Challan$itemsArgs<ExtArgs>
    _count?: boolean | ChallanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChallanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChallanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Challan"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$ChallanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challanNumber: string
      customerId: string
      status: $Enums.ChallanStatus
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["challan"]>
    composites: {}
  }

  type ChallanGetPayload<S extends boolean | null | undefined | ChallanDefaultArgs> = $Result.GetResult<Prisma.$ChallanPayload, S>

  type ChallanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChallanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChallanCountAggregateInputType | true
    }

  export interface ChallanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Challan'], meta: { name: 'Challan' } }
    /**
     * Find zero or one Challan that matches the filter.
     * @param {ChallanFindUniqueArgs} args - Arguments to find a Challan
     * @example
     * // Get one Challan
     * const challan = await prisma.challan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallanFindUniqueArgs>(args: SelectSubset<T, ChallanFindUniqueArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Challan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChallanFindUniqueOrThrowArgs} args - Arguments to find a Challan
     * @example
     * // Get one Challan
     * const challan = await prisma.challan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallanFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Challan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanFindFirstArgs} args - Arguments to find a Challan
     * @example
     * // Get one Challan
     * const challan = await prisma.challan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallanFindFirstArgs>(args?: SelectSubset<T, ChallanFindFirstArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Challan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanFindFirstOrThrowArgs} args - Arguments to find a Challan
     * @example
     * // Get one Challan
     * const challan = await prisma.challan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallanFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Challans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challans
     * const challans = await prisma.challan.findMany()
     * 
     * // Get first 10 Challans
     * const challans = await prisma.challan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challanWithIdOnly = await prisma.challan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallanFindManyArgs>(args?: SelectSubset<T, ChallanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Challan.
     * @param {ChallanCreateArgs} args - Arguments to create a Challan.
     * @example
     * // Create one Challan
     * const Challan = await prisma.challan.create({
     *   data: {
     *     // ... data to create a Challan
     *   }
     * })
     * 
     */
    create<T extends ChallanCreateArgs>(args: SelectSubset<T, ChallanCreateArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Challans.
     * @param {ChallanCreateManyArgs} args - Arguments to create many Challans.
     * @example
     * // Create many Challans
     * const challan = await prisma.challan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallanCreateManyArgs>(args?: SelectSubset<T, ChallanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challans and returns the data saved in the database.
     * @param {ChallanCreateManyAndReturnArgs} args - Arguments to create many Challans.
     * @example
     * // Create many Challans
     * const challan = await prisma.challan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challans and only return the `id`
     * const challanWithIdOnly = await prisma.challan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallanCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Challan.
     * @param {ChallanDeleteArgs} args - Arguments to delete one Challan.
     * @example
     * // Delete one Challan
     * const Challan = await prisma.challan.delete({
     *   where: {
     *     // ... filter to delete one Challan
     *   }
     * })
     * 
     */
    delete<T extends ChallanDeleteArgs>(args: SelectSubset<T, ChallanDeleteArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Challan.
     * @param {ChallanUpdateArgs} args - Arguments to update one Challan.
     * @example
     * // Update one Challan
     * const challan = await prisma.challan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallanUpdateArgs>(args: SelectSubset<T, ChallanUpdateArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Challans.
     * @param {ChallanDeleteManyArgs} args - Arguments to filter Challans to delete.
     * @example
     * // Delete a few Challans
     * const { count } = await prisma.challan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallanDeleteManyArgs>(args?: SelectSubset<T, ChallanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challans
     * const challan = await prisma.challan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallanUpdateManyArgs>(args: SelectSubset<T, ChallanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Challan.
     * @param {ChallanUpsertArgs} args - Arguments to update or create a Challan.
     * @example
     * // Update or create a Challan
     * const challan = await prisma.challan.upsert({
     *   create: {
     *     // ... data to create a Challan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challan we want to update
     *   }
     * })
     */
    upsert<T extends ChallanUpsertArgs>(args: SelectSubset<T, ChallanUpsertArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Challans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanCountArgs} args - Arguments to filter Challans to count.
     * @example
     * // Count the number of Challans
     * const count = await prisma.challan.count({
     *   where: {
     *     // ... the filter for the Challans we want to count
     *   }
     * })
    **/
    count<T extends ChallanCountArgs>(
      args?: Subset<T, ChallanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallanAggregateArgs>(args: Subset<T, ChallanAggregateArgs>): Prisma.PrismaPromise<GetChallanAggregateType<T>>

    /**
     * Group by Challan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanGroupByArgs} args - Group by arguments.
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
      T extends ChallanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallanGroupByArgs['orderBy'] }
        : { orderBy?: ChallanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Challan model
   */
  readonly fields: ChallanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Challan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Challan$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Challan$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Challan model
   */ 
  interface ChallanFieldRefs {
    readonly id: FieldRef<"Challan", 'String'>
    readonly challanNumber: FieldRef<"Challan", 'String'>
    readonly customerId: FieldRef<"Challan", 'String'>
    readonly status: FieldRef<"Challan", 'ChallanStatus'>
    readonly createdById: FieldRef<"Challan", 'String'>
    readonly createdAt: FieldRef<"Challan", 'DateTime'>
    readonly updatedAt: FieldRef<"Challan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Challan findUnique
   */
  export type ChallanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * Filter, which Challan to fetch.
     */
    where: ChallanWhereUniqueInput
  }

  /**
   * Challan findUniqueOrThrow
   */
  export type ChallanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * Filter, which Challan to fetch.
     */
    where: ChallanWhereUniqueInput
  }

  /**
   * Challan findFirst
   */
  export type ChallanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * Filter, which Challan to fetch.
     */
    where?: ChallanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challans to fetch.
     */
    orderBy?: ChallanOrderByWithRelationInput | ChallanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challans.
     */
    cursor?: ChallanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challans.
     */
    distinct?: ChallanScalarFieldEnum | ChallanScalarFieldEnum[]
  }

  /**
   * Challan findFirstOrThrow
   */
  export type ChallanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * Filter, which Challan to fetch.
     */
    where?: ChallanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challans to fetch.
     */
    orderBy?: ChallanOrderByWithRelationInput | ChallanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Challans.
     */
    cursor?: ChallanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Challans.
     */
    distinct?: ChallanScalarFieldEnum | ChallanScalarFieldEnum[]
  }

  /**
   * Challan findMany
   */
  export type ChallanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * Filter, which Challans to fetch.
     */
    where?: ChallanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Challans to fetch.
     */
    orderBy?: ChallanOrderByWithRelationInput | ChallanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Challans.
     */
    cursor?: ChallanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Challans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Challans.
     */
    skip?: number
    distinct?: ChallanScalarFieldEnum | ChallanScalarFieldEnum[]
  }

  /**
   * Challan create
   */
  export type ChallanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * The data needed to create a Challan.
     */
    data: XOR<ChallanCreateInput, ChallanUncheckedCreateInput>
  }

  /**
   * Challan createMany
   */
  export type ChallanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Challans.
     */
    data: ChallanCreateManyInput | ChallanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Challan createManyAndReturn
   */
  export type ChallanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Challans.
     */
    data: ChallanCreateManyInput | ChallanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Challan update
   */
  export type ChallanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * The data needed to update a Challan.
     */
    data: XOR<ChallanUpdateInput, ChallanUncheckedUpdateInput>
    /**
     * Choose, which Challan to update.
     */
    where: ChallanWhereUniqueInput
  }

  /**
   * Challan updateMany
   */
  export type ChallanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Challans.
     */
    data: XOR<ChallanUpdateManyMutationInput, ChallanUncheckedUpdateManyInput>
    /**
     * Filter which Challans to update
     */
    where?: ChallanWhereInput
  }

  /**
   * Challan upsert
   */
  export type ChallanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * The filter to search for the Challan to update in case it exists.
     */
    where: ChallanWhereUniqueInput
    /**
     * In case the Challan found by the `where` argument doesn't exist, create a new Challan with this data.
     */
    create: XOR<ChallanCreateInput, ChallanUncheckedCreateInput>
    /**
     * In case the Challan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallanUpdateInput, ChallanUncheckedUpdateInput>
  }

  /**
   * Challan delete
   */
  export type ChallanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
    /**
     * Filter which Challan to delete.
     */
    where: ChallanWhereUniqueInput
  }

  /**
   * Challan deleteMany
   */
  export type ChallanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Challans to delete
     */
    where?: ChallanWhereInput
  }

  /**
   * Challan.items
   */
  export type Challan$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    where?: ChallanItemWhereInput
    orderBy?: ChallanItemOrderByWithRelationInput | ChallanItemOrderByWithRelationInput[]
    cursor?: ChallanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallanItemScalarFieldEnum | ChallanItemScalarFieldEnum[]
  }

  /**
   * Challan without action
   */
  export type ChallanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Challan
     */
    select?: ChallanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanInclude<ExtArgs> | null
  }


  /**
   * Model ChallanItem
   */

  export type AggregateChallanItem = {
    _count: ChallanItemCountAggregateOutputType | null
    _avg: ChallanItemAvgAggregateOutputType | null
    _sum: ChallanItemSumAggregateOutputType | null
    _min: ChallanItemMinAggregateOutputType | null
    _max: ChallanItemMaxAggregateOutputType | null
  }

  export type ChallanItemAvgAggregateOutputType = {
    quantity: number | null
    unitPriceSnapshot: number | null
  }

  export type ChallanItemSumAggregateOutputType = {
    quantity: number | null
    unitPriceSnapshot: number | null
  }

  export type ChallanItemMinAggregateOutputType = {
    id: string | null
    challanId: string | null
    productId: string | null
    quantity: number | null
    productNameSnapshot: string | null
    skuSnapshot: string | null
    unitPriceSnapshot: number | null
  }

  export type ChallanItemMaxAggregateOutputType = {
    id: string | null
    challanId: string | null
    productId: string | null
    quantity: number | null
    productNameSnapshot: string | null
    skuSnapshot: string | null
    unitPriceSnapshot: number | null
  }

  export type ChallanItemCountAggregateOutputType = {
    id: number
    challanId: number
    productId: number
    quantity: number
    productNameSnapshot: number
    skuSnapshot: number
    unitPriceSnapshot: number
    _all: number
  }


  export type ChallanItemAvgAggregateInputType = {
    quantity?: true
    unitPriceSnapshot?: true
  }

  export type ChallanItemSumAggregateInputType = {
    quantity?: true
    unitPriceSnapshot?: true
  }

  export type ChallanItemMinAggregateInputType = {
    id?: true
    challanId?: true
    productId?: true
    quantity?: true
    productNameSnapshot?: true
    skuSnapshot?: true
    unitPriceSnapshot?: true
  }

  export type ChallanItemMaxAggregateInputType = {
    id?: true
    challanId?: true
    productId?: true
    quantity?: true
    productNameSnapshot?: true
    skuSnapshot?: true
    unitPriceSnapshot?: true
  }

  export type ChallanItemCountAggregateInputType = {
    id?: true
    challanId?: true
    productId?: true
    quantity?: true
    productNameSnapshot?: true
    skuSnapshot?: true
    unitPriceSnapshot?: true
    _all?: true
  }

  export type ChallanItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallanItem to aggregate.
     */
    where?: ChallanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallanItems to fetch.
     */
    orderBy?: ChallanItemOrderByWithRelationInput | ChallanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChallanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChallanItems
    **/
    _count?: true | ChallanItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallanItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallanItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallanItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallanItemMaxAggregateInputType
  }

  export type GetChallanItemAggregateType<T extends ChallanItemAggregateArgs> = {
        [P in keyof T & keyof AggregateChallanItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallanItem[P]>
      : GetScalarType<T[P], AggregateChallanItem[P]>
  }




  export type ChallanItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChallanItemWhereInput
    orderBy?: ChallanItemOrderByWithAggregationInput | ChallanItemOrderByWithAggregationInput[]
    by: ChallanItemScalarFieldEnum[] | ChallanItemScalarFieldEnum
    having?: ChallanItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallanItemCountAggregateInputType | true
    _avg?: ChallanItemAvgAggregateInputType
    _sum?: ChallanItemSumAggregateInputType
    _min?: ChallanItemMinAggregateInputType
    _max?: ChallanItemMaxAggregateInputType
  }

  export type ChallanItemGroupByOutputType = {
    id: string
    challanId: string
    productId: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
    _count: ChallanItemCountAggregateOutputType | null
    _avg: ChallanItemAvgAggregateOutputType | null
    _sum: ChallanItemSumAggregateOutputType | null
    _min: ChallanItemMinAggregateOutputType | null
    _max: ChallanItemMaxAggregateOutputType | null
  }

  type GetChallanItemGroupByPayload<T extends ChallanItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallanItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallanItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallanItemGroupByOutputType[P]>
            : GetScalarType<T[P], ChallanItemGroupByOutputType[P]>
        }
      >
    >


  export type ChallanItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challanId?: boolean
    productId?: boolean
    quantity?: boolean
    productNameSnapshot?: boolean
    skuSnapshot?: boolean
    unitPriceSnapshot?: boolean
    challan?: boolean | ChallanDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challanItem"]>

  export type ChallanItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    challanId?: boolean
    productId?: boolean
    quantity?: boolean
    productNameSnapshot?: boolean
    skuSnapshot?: boolean
    unitPriceSnapshot?: boolean
    challan?: boolean | ChallanDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challanItem"]>

  export type ChallanItemSelectScalar = {
    id?: boolean
    challanId?: boolean
    productId?: boolean
    quantity?: boolean
    productNameSnapshot?: boolean
    skuSnapshot?: boolean
    unitPriceSnapshot?: boolean
  }

  export type ChallanItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challan?: boolean | ChallanDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ChallanItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challan?: boolean | ChallanDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ChallanItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChallanItem"
    objects: {
      challan: Prisma.$ChallanPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      challanId: string
      productId: string
      quantity: number
      productNameSnapshot: string
      skuSnapshot: string
      unitPriceSnapshot: number
    }, ExtArgs["result"]["challanItem"]>
    composites: {}
  }

  type ChallanItemGetPayload<S extends boolean | null | undefined | ChallanItemDefaultArgs> = $Result.GetResult<Prisma.$ChallanItemPayload, S>

  type ChallanItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChallanItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChallanItemCountAggregateInputType | true
    }

  export interface ChallanItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChallanItem'], meta: { name: 'ChallanItem' } }
    /**
     * Find zero or one ChallanItem that matches the filter.
     * @param {ChallanItemFindUniqueArgs} args - Arguments to find a ChallanItem
     * @example
     * // Get one ChallanItem
     * const challanItem = await prisma.challanItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChallanItemFindUniqueArgs>(args: SelectSubset<T, ChallanItemFindUniqueArgs<ExtArgs>>): Prisma__ChallanItemClient<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChallanItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChallanItemFindUniqueOrThrowArgs} args - Arguments to find a ChallanItem
     * @example
     * // Get one ChallanItem
     * const challanItem = await prisma.challanItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChallanItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ChallanItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChallanItemClient<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChallanItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanItemFindFirstArgs} args - Arguments to find a ChallanItem
     * @example
     * // Get one ChallanItem
     * const challanItem = await prisma.challanItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChallanItemFindFirstArgs>(args?: SelectSubset<T, ChallanItemFindFirstArgs<ExtArgs>>): Prisma__ChallanItemClient<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChallanItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanItemFindFirstOrThrowArgs} args - Arguments to find a ChallanItem
     * @example
     * // Get one ChallanItem
     * const challanItem = await prisma.challanItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChallanItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ChallanItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChallanItemClient<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChallanItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChallanItems
     * const challanItems = await prisma.challanItem.findMany()
     * 
     * // Get first 10 ChallanItems
     * const challanItems = await prisma.challanItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challanItemWithIdOnly = await prisma.challanItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChallanItemFindManyArgs>(args?: SelectSubset<T, ChallanItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChallanItem.
     * @param {ChallanItemCreateArgs} args - Arguments to create a ChallanItem.
     * @example
     * // Create one ChallanItem
     * const ChallanItem = await prisma.challanItem.create({
     *   data: {
     *     // ... data to create a ChallanItem
     *   }
     * })
     * 
     */
    create<T extends ChallanItemCreateArgs>(args: SelectSubset<T, ChallanItemCreateArgs<ExtArgs>>): Prisma__ChallanItemClient<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChallanItems.
     * @param {ChallanItemCreateManyArgs} args - Arguments to create many ChallanItems.
     * @example
     * // Create many ChallanItems
     * const challanItem = await prisma.challanItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChallanItemCreateManyArgs>(args?: SelectSubset<T, ChallanItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChallanItems and returns the data saved in the database.
     * @param {ChallanItemCreateManyAndReturnArgs} args - Arguments to create many ChallanItems.
     * @example
     * // Create many ChallanItems
     * const challanItem = await prisma.challanItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChallanItems and only return the `id`
     * const challanItemWithIdOnly = await prisma.challanItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChallanItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ChallanItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChallanItem.
     * @param {ChallanItemDeleteArgs} args - Arguments to delete one ChallanItem.
     * @example
     * // Delete one ChallanItem
     * const ChallanItem = await prisma.challanItem.delete({
     *   where: {
     *     // ... filter to delete one ChallanItem
     *   }
     * })
     * 
     */
    delete<T extends ChallanItemDeleteArgs>(args: SelectSubset<T, ChallanItemDeleteArgs<ExtArgs>>): Prisma__ChallanItemClient<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChallanItem.
     * @param {ChallanItemUpdateArgs} args - Arguments to update one ChallanItem.
     * @example
     * // Update one ChallanItem
     * const challanItem = await prisma.challanItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChallanItemUpdateArgs>(args: SelectSubset<T, ChallanItemUpdateArgs<ExtArgs>>): Prisma__ChallanItemClient<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChallanItems.
     * @param {ChallanItemDeleteManyArgs} args - Arguments to filter ChallanItems to delete.
     * @example
     * // Delete a few ChallanItems
     * const { count } = await prisma.challanItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChallanItemDeleteManyArgs>(args?: SelectSubset<T, ChallanItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChallanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChallanItems
     * const challanItem = await prisma.challanItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChallanItemUpdateManyArgs>(args: SelectSubset<T, ChallanItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChallanItem.
     * @param {ChallanItemUpsertArgs} args - Arguments to update or create a ChallanItem.
     * @example
     * // Update or create a ChallanItem
     * const challanItem = await prisma.challanItem.upsert({
     *   create: {
     *     // ... data to create a ChallanItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChallanItem we want to update
     *   }
     * })
     */
    upsert<T extends ChallanItemUpsertArgs>(args: SelectSubset<T, ChallanItemUpsertArgs<ExtArgs>>): Prisma__ChallanItemClient<$Result.GetResult<Prisma.$ChallanItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChallanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanItemCountArgs} args - Arguments to filter ChallanItems to count.
     * @example
     * // Count the number of ChallanItems
     * const count = await prisma.challanItem.count({
     *   where: {
     *     // ... the filter for the ChallanItems we want to count
     *   }
     * })
    **/
    count<T extends ChallanItemCountArgs>(
      args?: Subset<T, ChallanItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallanItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChallanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChallanItemAggregateArgs>(args: Subset<T, ChallanItemAggregateArgs>): Prisma.PrismaPromise<GetChallanItemAggregateType<T>>

    /**
     * Group by ChallanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallanItemGroupByArgs} args - Group by arguments.
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
      T extends ChallanItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChallanItemGroupByArgs['orderBy'] }
        : { orderBy?: ChallanItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChallanItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallanItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChallanItem model
   */
  readonly fields: ChallanItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChallanItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChallanItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challan<T extends ChallanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChallanDefaultArgs<ExtArgs>>): Prisma__ChallanClient<$Result.GetResult<Prisma.$ChallanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ChallanItem model
   */ 
  interface ChallanItemFieldRefs {
    readonly id: FieldRef<"ChallanItem", 'String'>
    readonly challanId: FieldRef<"ChallanItem", 'String'>
    readonly productId: FieldRef<"ChallanItem", 'String'>
    readonly quantity: FieldRef<"ChallanItem", 'Int'>
    readonly productNameSnapshot: FieldRef<"ChallanItem", 'String'>
    readonly skuSnapshot: FieldRef<"ChallanItem", 'String'>
    readonly unitPriceSnapshot: FieldRef<"ChallanItem", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ChallanItem findUnique
   */
  export type ChallanItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * Filter, which ChallanItem to fetch.
     */
    where: ChallanItemWhereUniqueInput
  }

  /**
   * ChallanItem findUniqueOrThrow
   */
  export type ChallanItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * Filter, which ChallanItem to fetch.
     */
    where: ChallanItemWhereUniqueInput
  }

  /**
   * ChallanItem findFirst
   */
  export type ChallanItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * Filter, which ChallanItem to fetch.
     */
    where?: ChallanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallanItems to fetch.
     */
    orderBy?: ChallanItemOrderByWithRelationInput | ChallanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallanItems.
     */
    cursor?: ChallanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallanItems.
     */
    distinct?: ChallanItemScalarFieldEnum | ChallanItemScalarFieldEnum[]
  }

  /**
   * ChallanItem findFirstOrThrow
   */
  export type ChallanItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * Filter, which ChallanItem to fetch.
     */
    where?: ChallanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallanItems to fetch.
     */
    orderBy?: ChallanItemOrderByWithRelationInput | ChallanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChallanItems.
     */
    cursor?: ChallanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChallanItems.
     */
    distinct?: ChallanItemScalarFieldEnum | ChallanItemScalarFieldEnum[]
  }

  /**
   * ChallanItem findMany
   */
  export type ChallanItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * Filter, which ChallanItems to fetch.
     */
    where?: ChallanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChallanItems to fetch.
     */
    orderBy?: ChallanItemOrderByWithRelationInput | ChallanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChallanItems.
     */
    cursor?: ChallanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChallanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChallanItems.
     */
    skip?: number
    distinct?: ChallanItemScalarFieldEnum | ChallanItemScalarFieldEnum[]
  }

  /**
   * ChallanItem create
   */
  export type ChallanItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ChallanItem.
     */
    data: XOR<ChallanItemCreateInput, ChallanItemUncheckedCreateInput>
  }

  /**
   * ChallanItem createMany
   */
  export type ChallanItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChallanItems.
     */
    data: ChallanItemCreateManyInput | ChallanItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChallanItem createManyAndReturn
   */
  export type ChallanItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChallanItems.
     */
    data: ChallanItemCreateManyInput | ChallanItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChallanItem update
   */
  export type ChallanItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ChallanItem.
     */
    data: XOR<ChallanItemUpdateInput, ChallanItemUncheckedUpdateInput>
    /**
     * Choose, which ChallanItem to update.
     */
    where: ChallanItemWhereUniqueInput
  }

  /**
   * ChallanItem updateMany
   */
  export type ChallanItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChallanItems.
     */
    data: XOR<ChallanItemUpdateManyMutationInput, ChallanItemUncheckedUpdateManyInput>
    /**
     * Filter which ChallanItems to update
     */
    where?: ChallanItemWhereInput
  }

  /**
   * ChallanItem upsert
   */
  export type ChallanItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ChallanItem to update in case it exists.
     */
    where: ChallanItemWhereUniqueInput
    /**
     * In case the ChallanItem found by the `where` argument doesn't exist, create a new ChallanItem with this data.
     */
    create: XOR<ChallanItemCreateInput, ChallanItemUncheckedCreateInput>
    /**
     * In case the ChallanItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChallanItemUpdateInput, ChallanItemUncheckedUpdateInput>
  }

  /**
   * ChallanItem delete
   */
  export type ChallanItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
    /**
     * Filter which ChallanItem to delete.
     */
    where: ChallanItemWhereUniqueInput
  }

  /**
   * ChallanItem deleteMany
   */
  export type ChallanItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChallanItems to delete
     */
    where?: ChallanItemWhereInput
  }

  /**
   * ChallanItem without action
   */
  export type ChallanItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallanItem
     */
    select?: ChallanItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChallanItemInclude<ExtArgs> | null
  }


  /**
   * Model UserActivity
   */

  export type AggregateUserActivity = {
    _count: UserActivityCountAggregateOutputType | null
    _min: UserActivityMinAggregateOutputType | null
    _max: UserActivityMaxAggregateOutputType | null
  }

  export type UserActivityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    details: string | null
    createdAt: Date | null
  }

  export type UserActivityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    details: string | null
    createdAt: Date | null
  }

  export type UserActivityCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    details: number
    createdAt: number
    _all: number
  }


  export type UserActivityMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    createdAt?: true
  }

  export type UserActivityMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    createdAt?: true
  }

  export type UserActivityCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type UserActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActivity to aggregate.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserActivities
    **/
    _count?: true | UserActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserActivityMaxAggregateInputType
  }

  export type GetUserActivityAggregateType<T extends UserActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateUserActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserActivity[P]>
      : GetScalarType<T[P], AggregateUserActivity[P]>
  }




  export type UserActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserActivityWhereInput
    orderBy?: UserActivityOrderByWithAggregationInput | UserActivityOrderByWithAggregationInput[]
    by: UserActivityScalarFieldEnum[] | UserActivityScalarFieldEnum
    having?: UserActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserActivityCountAggregateInputType | true
    _min?: UserActivityMinAggregateInputType
    _max?: UserActivityMaxAggregateInputType
  }

  export type UserActivityGroupByOutputType = {
    id: string
    userId: string
    action: string
    details: string | null
    createdAt: Date
    _count: UserActivityCountAggregateOutputType | null
    _min: UserActivityMinAggregateOutputType | null
    _max: UserActivityMaxAggregateOutputType | null
  }

  type GetUserActivityGroupByPayload<T extends UserActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserActivityGroupByOutputType[P]>
            : GetScalarType<T[P], UserActivityGroupByOutputType[P]>
        }
      >
    >


  export type UserActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type UserActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userActivity"]>

  export type UserActivitySelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type UserActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserActivity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["userActivity"]>
    composites: {}
  }

  type UserActivityGetPayload<S extends boolean | null | undefined | UserActivityDefaultArgs> = $Result.GetResult<Prisma.$UserActivityPayload, S>

  type UserActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserActivityCountAggregateInputType | true
    }

  export interface UserActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserActivity'], meta: { name: 'UserActivity' } }
    /**
     * Find zero or one UserActivity that matches the filter.
     * @param {UserActivityFindUniqueArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserActivityFindUniqueArgs>(args: SelectSubset<T, UserActivityFindUniqueArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserActivity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserActivityFindUniqueOrThrowArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, UserActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindFirstArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserActivityFindFirstArgs>(args?: SelectSubset<T, UserActivityFindFirstArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindFirstOrThrowArgs} args - Arguments to find a UserActivity
     * @example
     * // Get one UserActivity
     * const userActivity = await prisma.userActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, UserActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserActivities
     * const userActivities = await prisma.userActivity.findMany()
     * 
     * // Get first 10 UserActivities
     * const userActivities = await prisma.userActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userActivityWithIdOnly = await prisma.userActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserActivityFindManyArgs>(args?: SelectSubset<T, UserActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserActivity.
     * @param {UserActivityCreateArgs} args - Arguments to create a UserActivity.
     * @example
     * // Create one UserActivity
     * const UserActivity = await prisma.userActivity.create({
     *   data: {
     *     // ... data to create a UserActivity
     *   }
     * })
     * 
     */
    create<T extends UserActivityCreateArgs>(args: SelectSubset<T, UserActivityCreateArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserActivities.
     * @param {UserActivityCreateManyArgs} args - Arguments to create many UserActivities.
     * @example
     * // Create many UserActivities
     * const userActivity = await prisma.userActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserActivityCreateManyArgs>(args?: SelectSubset<T, UserActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserActivities and returns the data saved in the database.
     * @param {UserActivityCreateManyAndReturnArgs} args - Arguments to create many UserActivities.
     * @example
     * // Create many UserActivities
     * const userActivity = await prisma.userActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserActivities and only return the `id`
     * const userActivityWithIdOnly = await prisma.userActivity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, UserActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserActivity.
     * @param {UserActivityDeleteArgs} args - Arguments to delete one UserActivity.
     * @example
     * // Delete one UserActivity
     * const UserActivity = await prisma.userActivity.delete({
     *   where: {
     *     // ... filter to delete one UserActivity
     *   }
     * })
     * 
     */
    delete<T extends UserActivityDeleteArgs>(args: SelectSubset<T, UserActivityDeleteArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserActivity.
     * @param {UserActivityUpdateArgs} args - Arguments to update one UserActivity.
     * @example
     * // Update one UserActivity
     * const userActivity = await prisma.userActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserActivityUpdateArgs>(args: SelectSubset<T, UserActivityUpdateArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserActivities.
     * @param {UserActivityDeleteManyArgs} args - Arguments to filter UserActivities to delete.
     * @example
     * // Delete a few UserActivities
     * const { count } = await prisma.userActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserActivityDeleteManyArgs>(args?: SelectSubset<T, UserActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserActivities
     * const userActivity = await prisma.userActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserActivityUpdateManyArgs>(args: SelectSubset<T, UserActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserActivity.
     * @param {UserActivityUpsertArgs} args - Arguments to update or create a UserActivity.
     * @example
     * // Update or create a UserActivity
     * const userActivity = await prisma.userActivity.upsert({
     *   create: {
     *     // ... data to create a UserActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserActivity we want to update
     *   }
     * })
     */
    upsert<T extends UserActivityUpsertArgs>(args: SelectSubset<T, UserActivityUpsertArgs<ExtArgs>>): Prisma__UserActivityClient<$Result.GetResult<Prisma.$UserActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityCountArgs} args - Arguments to filter UserActivities to count.
     * @example
     * // Count the number of UserActivities
     * const count = await prisma.userActivity.count({
     *   where: {
     *     // ... the filter for the UserActivities we want to count
     *   }
     * })
    **/
    count<T extends UserActivityCountArgs>(
      args?: Subset<T, UserActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserActivityAggregateArgs>(args: Subset<T, UserActivityAggregateArgs>): Prisma.PrismaPromise<GetUserActivityAggregateType<T>>

    /**
     * Group by UserActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserActivityGroupByArgs} args - Group by arguments.
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
      T extends UserActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserActivityGroupByArgs['orderBy'] }
        : { orderBy?: UserActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserActivity model
   */
  readonly fields: UserActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserActivity model
   */ 
  interface UserActivityFieldRefs {
    readonly id: FieldRef<"UserActivity", 'String'>
    readonly userId: FieldRef<"UserActivity", 'String'>
    readonly action: FieldRef<"UserActivity", 'String'>
    readonly details: FieldRef<"UserActivity", 'String'>
    readonly createdAt: FieldRef<"UserActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserActivity findUnique
   */
  export type UserActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity findUniqueOrThrow
   */
  export type UserActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity findFirst
   */
  export type UserActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity findFirstOrThrow
   */
  export type UserActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivity to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserActivities.
     */
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity findMany
   */
  export type UserActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter, which UserActivities to fetch.
     */
    where?: UserActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserActivities to fetch.
     */
    orderBy?: UserActivityOrderByWithRelationInput | UserActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserActivities.
     */
    cursor?: UserActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserActivities.
     */
    skip?: number
    distinct?: UserActivityScalarFieldEnum | UserActivityScalarFieldEnum[]
  }

  /**
   * UserActivity create
   */
  export type UserActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a UserActivity.
     */
    data: XOR<UserActivityCreateInput, UserActivityUncheckedCreateInput>
  }

  /**
   * UserActivity createMany
   */
  export type UserActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserActivities.
     */
    data: UserActivityCreateManyInput | UserActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserActivity createManyAndReturn
   */
  export type UserActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserActivities.
     */
    data: UserActivityCreateManyInput | UserActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserActivity update
   */
  export type UserActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a UserActivity.
     */
    data: XOR<UserActivityUpdateInput, UserActivityUncheckedUpdateInput>
    /**
     * Choose, which UserActivity to update.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity updateMany
   */
  export type UserActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserActivities.
     */
    data: XOR<UserActivityUpdateManyMutationInput, UserActivityUncheckedUpdateManyInput>
    /**
     * Filter which UserActivities to update
     */
    where?: UserActivityWhereInput
  }

  /**
   * UserActivity upsert
   */
  export type UserActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the UserActivity to update in case it exists.
     */
    where: UserActivityWhereUniqueInput
    /**
     * In case the UserActivity found by the `where` argument doesn't exist, create a new UserActivity with this data.
     */
    create: XOR<UserActivityCreateInput, UserActivityUncheckedCreateInput>
    /**
     * In case the UserActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserActivityUpdateInput, UserActivityUncheckedUpdateInput>
  }

  /**
   * UserActivity delete
   */
  export type UserActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
    /**
     * Filter which UserActivity to delete.
     */
    where: UserActivityWhereUniqueInput
  }

  /**
   * UserActivity deleteMany
   */
  export type UserActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserActivities to delete
     */
    where?: UserActivityWhereInput
  }

  /**
   * UserActivity without action
   */
  export type UserActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserActivity
     */
    select?: UserActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserActivityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    secretCode: 'secretCode',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    customerName: 'customerName',
    mobile: 'mobile',
    email: 'email',
    businessName: 'businessName',
    gstNumber: 'gstNumber',
    customerType: 'customerType',
    address: 'address',
    status: 'status',
    followUpDate: 'followUpDate',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    productName: 'productName',
    sku: 'sku',
    category: 'category',
    unitPrice: 'unitPrice',
    currentStock: 'currentStock',
    minimumStock: 'minimumStock',
    warehouseLocation: 'warehouseLocation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InventoryMovementScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    quantity: 'quantity',
    type: 'type',
    reason: 'reason',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type InventoryMovementScalarFieldEnum = (typeof InventoryMovementScalarFieldEnum)[keyof typeof InventoryMovementScalarFieldEnum]


  export const ChallanScalarFieldEnum: {
    id: 'id',
    challanNumber: 'challanNumber',
    customerId: 'customerId',
    status: 'status',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChallanScalarFieldEnum = (typeof ChallanScalarFieldEnum)[keyof typeof ChallanScalarFieldEnum]


  export const ChallanItemScalarFieldEnum: {
    id: 'id',
    challanId: 'challanId',
    productId: 'productId',
    quantity: 'quantity',
    productNameSnapshot: 'productNameSnapshot',
    skuSnapshot: 'skuSnapshot',
    unitPriceSnapshot: 'unitPriceSnapshot'
  };

  export type ChallanItemScalarFieldEnum = (typeof ChallanItemScalarFieldEnum)[keyof typeof ChallanItemScalarFieldEnum]


  export const UserActivityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type UserActivityScalarFieldEnum = (typeof UserActivityScalarFieldEnum)[keyof typeof UserActivityScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'CustomerType'
   */
  export type EnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType'>
    


  /**
   * Reference to a field of type 'CustomerType[]'
   */
  export type ListEnumCustomerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerType[]'>
    


  /**
   * Reference to a field of type 'CustomerStatus'
   */
  export type EnumCustomerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerStatus'>
    


  /**
   * Reference to a field of type 'CustomerStatus[]'
   */
  export type ListEnumCustomerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MovementType'
   */
  export type EnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType'>
    


  /**
   * Reference to a field of type 'MovementType[]'
   */
  export type ListEnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType[]'>
    


  /**
   * Reference to a field of type 'ChallanStatus'
   */
  export type EnumChallanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallanStatus'>
    


  /**
   * Reference to a field of type 'ChallanStatus[]'
   */
  export type ListEnumChallanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChallanStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    secretCode?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    movements?: InventoryMovementListRelationFilter
    challans?: ChallanListRelationFilter
    activities?: UserActivityListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    secretCode?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movements?: InventoryMovementOrderByRelationAggregateInput
    challans?: ChallanOrderByRelationAggregateInput
    activities?: UserActivityOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    secretCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    movements?: InventoryMovementListRelationFilter
    challans?: ChallanListRelationFilter
    activities?: UserActivityListRelationFilter
  }, "id" | "email" | "secretCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    secretCode?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    secretCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    customerName?: StringFilter<"Customer"> | string
    mobile?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    businessName?: StringNullableFilter<"Customer"> | string | null
    gstNumber?: StringNullableFilter<"Customer"> | string | null
    customerType?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    address?: StringFilter<"Customer"> | string
    status?: EnumCustomerStatusFilter<"Customer"> | $Enums.CustomerStatus
    followUpDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    challans?: ChallanListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    businessName?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    customerType?: SortOrder
    address?: SortOrder
    status?: SortOrder
    followUpDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    challans?: ChallanOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customerName?: StringFilter<"Customer"> | string
    mobile?: StringFilter<"Customer"> | string
    businessName?: StringNullableFilter<"Customer"> | string | null
    gstNumber?: StringNullableFilter<"Customer"> | string | null
    customerType?: EnumCustomerTypeFilter<"Customer"> | $Enums.CustomerType
    address?: StringFilter<"Customer"> | string
    status?: EnumCustomerStatusFilter<"Customer"> | $Enums.CustomerStatus
    followUpDate?: DateTimeNullableFilter<"Customer"> | Date | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    challans?: ChallanListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    businessName?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    customerType?: SortOrder
    address?: SortOrder
    status?: SortOrder
    followUpDate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    customerName?: StringWithAggregatesFilter<"Customer"> | string
    mobile?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    businessName?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    gstNumber?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    customerType?: EnumCustomerTypeWithAggregatesFilter<"Customer"> | $Enums.CustomerType
    address?: StringWithAggregatesFilter<"Customer"> | string
    status?: EnumCustomerStatusWithAggregatesFilter<"Customer"> | $Enums.CustomerStatus
    followUpDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    productName?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    unitPrice?: FloatFilter<"Product"> | number
    currentStock?: IntFilter<"Product"> | number
    minimumStock?: IntFilter<"Product"> | number
    warehouseLocation?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    movements?: InventoryMovementListRelationFilter
    challanItems?: ChallanItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    productName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currentStock?: SortOrder
    minimumStock?: SortOrder
    warehouseLocation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movements?: InventoryMovementOrderByRelationAggregateInput
    challanItems?: ChallanItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    productName?: StringFilter<"Product"> | string
    category?: StringFilter<"Product"> | string
    unitPrice?: FloatFilter<"Product"> | number
    currentStock?: IntFilter<"Product"> | number
    minimumStock?: IntFilter<"Product"> | number
    warehouseLocation?: StringNullableFilter<"Product"> | string | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    movements?: InventoryMovementListRelationFilter
    challanItems?: ChallanItemListRelationFilter
  }, "id" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    productName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currentStock?: SortOrder
    minimumStock?: SortOrder
    warehouseLocation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    productName?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    category?: StringWithAggregatesFilter<"Product"> | string
    unitPrice?: FloatWithAggregatesFilter<"Product"> | number
    currentStock?: IntWithAggregatesFilter<"Product"> | number
    minimumStock?: IntWithAggregatesFilter<"Product"> | number
    warehouseLocation?: StringNullableWithAggregatesFilter<"Product"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type InventoryMovementWhereInput = {
    AND?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    OR?: InventoryMovementWhereInput[]
    NOT?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    id?: StringFilter<"InventoryMovement"> | string
    productId?: StringFilter<"InventoryMovement"> | string
    quantity?: IntFilter<"InventoryMovement"> | number
    type?: EnumMovementTypeFilter<"InventoryMovement"> | $Enums.MovementType
    reason?: StringFilter<"InventoryMovement"> | string
    createdById?: StringFilter<"InventoryMovement"> | string
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type InventoryMovementOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type InventoryMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    OR?: InventoryMovementWhereInput[]
    NOT?: InventoryMovementWhereInput | InventoryMovementWhereInput[]
    productId?: StringFilter<"InventoryMovement"> | string
    quantity?: IntFilter<"InventoryMovement"> | number
    type?: EnumMovementTypeFilter<"InventoryMovement"> | $Enums.MovementType
    reason?: StringFilter<"InventoryMovement"> | string
    createdById?: StringFilter<"InventoryMovement"> | string
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type InventoryMovementOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryMovementCountOrderByAggregateInput
    _avg?: InventoryMovementAvgOrderByAggregateInput
    _max?: InventoryMovementMaxOrderByAggregateInput
    _min?: InventoryMovementMinOrderByAggregateInput
    _sum?: InventoryMovementSumOrderByAggregateInput
  }

  export type InventoryMovementScalarWhereWithAggregatesInput = {
    AND?: InventoryMovementScalarWhereWithAggregatesInput | InventoryMovementScalarWhereWithAggregatesInput[]
    OR?: InventoryMovementScalarWhereWithAggregatesInput[]
    NOT?: InventoryMovementScalarWhereWithAggregatesInput | InventoryMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryMovement"> | string
    productId?: StringWithAggregatesFilter<"InventoryMovement"> | string
    quantity?: IntWithAggregatesFilter<"InventoryMovement"> | number
    type?: EnumMovementTypeWithAggregatesFilter<"InventoryMovement"> | $Enums.MovementType
    reason?: StringWithAggregatesFilter<"InventoryMovement"> | string
    createdById?: StringWithAggregatesFilter<"InventoryMovement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InventoryMovement"> | Date | string
  }

  export type ChallanWhereInput = {
    AND?: ChallanWhereInput | ChallanWhereInput[]
    OR?: ChallanWhereInput[]
    NOT?: ChallanWhereInput | ChallanWhereInput[]
    id?: StringFilter<"Challan"> | string
    challanNumber?: StringFilter<"Challan"> | string
    customerId?: StringFilter<"Challan"> | string
    status?: EnumChallanStatusFilter<"Challan"> | $Enums.ChallanStatus
    createdById?: StringFilter<"Challan"> | string
    createdAt?: DateTimeFilter<"Challan"> | Date | string
    updatedAt?: DateTimeFilter<"Challan"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    items?: ChallanItemListRelationFilter
  }

  export type ChallanOrderByWithRelationInput = {
    id?: SortOrder
    challanNumber?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    items?: ChallanItemOrderByRelationAggregateInput
  }

  export type ChallanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    challanNumber?: string
    AND?: ChallanWhereInput | ChallanWhereInput[]
    OR?: ChallanWhereInput[]
    NOT?: ChallanWhereInput | ChallanWhereInput[]
    customerId?: StringFilter<"Challan"> | string
    status?: EnumChallanStatusFilter<"Challan"> | $Enums.ChallanStatus
    createdById?: StringFilter<"Challan"> | string
    createdAt?: DateTimeFilter<"Challan"> | Date | string
    updatedAt?: DateTimeFilter<"Challan"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    items?: ChallanItemListRelationFilter
  }, "id" | "challanNumber">

  export type ChallanOrderByWithAggregationInput = {
    id?: SortOrder
    challanNumber?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChallanCountOrderByAggregateInput
    _max?: ChallanMaxOrderByAggregateInput
    _min?: ChallanMinOrderByAggregateInput
  }

  export type ChallanScalarWhereWithAggregatesInput = {
    AND?: ChallanScalarWhereWithAggregatesInput | ChallanScalarWhereWithAggregatesInput[]
    OR?: ChallanScalarWhereWithAggregatesInput[]
    NOT?: ChallanScalarWhereWithAggregatesInput | ChallanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Challan"> | string
    challanNumber?: StringWithAggregatesFilter<"Challan"> | string
    customerId?: StringWithAggregatesFilter<"Challan"> | string
    status?: EnumChallanStatusWithAggregatesFilter<"Challan"> | $Enums.ChallanStatus
    createdById?: StringWithAggregatesFilter<"Challan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Challan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Challan"> | Date | string
  }

  export type ChallanItemWhereInput = {
    AND?: ChallanItemWhereInput | ChallanItemWhereInput[]
    OR?: ChallanItemWhereInput[]
    NOT?: ChallanItemWhereInput | ChallanItemWhereInput[]
    id?: StringFilter<"ChallanItem"> | string
    challanId?: StringFilter<"ChallanItem"> | string
    productId?: StringFilter<"ChallanItem"> | string
    quantity?: IntFilter<"ChallanItem"> | number
    productNameSnapshot?: StringFilter<"ChallanItem"> | string
    skuSnapshot?: StringFilter<"ChallanItem"> | string
    unitPriceSnapshot?: FloatFilter<"ChallanItem"> | number
    challan?: XOR<ChallanRelationFilter, ChallanWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type ChallanItemOrderByWithRelationInput = {
    id?: SortOrder
    challanId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    productNameSnapshot?: SortOrder
    skuSnapshot?: SortOrder
    unitPriceSnapshot?: SortOrder
    challan?: ChallanOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ChallanItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChallanItemWhereInput | ChallanItemWhereInput[]
    OR?: ChallanItemWhereInput[]
    NOT?: ChallanItemWhereInput | ChallanItemWhereInput[]
    challanId?: StringFilter<"ChallanItem"> | string
    productId?: StringFilter<"ChallanItem"> | string
    quantity?: IntFilter<"ChallanItem"> | number
    productNameSnapshot?: StringFilter<"ChallanItem"> | string
    skuSnapshot?: StringFilter<"ChallanItem"> | string
    unitPriceSnapshot?: FloatFilter<"ChallanItem"> | number
    challan?: XOR<ChallanRelationFilter, ChallanWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type ChallanItemOrderByWithAggregationInput = {
    id?: SortOrder
    challanId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    productNameSnapshot?: SortOrder
    skuSnapshot?: SortOrder
    unitPriceSnapshot?: SortOrder
    _count?: ChallanItemCountOrderByAggregateInput
    _avg?: ChallanItemAvgOrderByAggregateInput
    _max?: ChallanItemMaxOrderByAggregateInput
    _min?: ChallanItemMinOrderByAggregateInput
    _sum?: ChallanItemSumOrderByAggregateInput
  }

  export type ChallanItemScalarWhereWithAggregatesInput = {
    AND?: ChallanItemScalarWhereWithAggregatesInput | ChallanItemScalarWhereWithAggregatesInput[]
    OR?: ChallanItemScalarWhereWithAggregatesInput[]
    NOT?: ChallanItemScalarWhereWithAggregatesInput | ChallanItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChallanItem"> | string
    challanId?: StringWithAggregatesFilter<"ChallanItem"> | string
    productId?: StringWithAggregatesFilter<"ChallanItem"> | string
    quantity?: IntWithAggregatesFilter<"ChallanItem"> | number
    productNameSnapshot?: StringWithAggregatesFilter<"ChallanItem"> | string
    skuSnapshot?: StringWithAggregatesFilter<"ChallanItem"> | string
    unitPriceSnapshot?: FloatWithAggregatesFilter<"ChallanItem"> | number
  }

  export type UserActivityWhereInput = {
    AND?: UserActivityWhereInput | UserActivityWhereInput[]
    OR?: UserActivityWhereInput[]
    NOT?: UserActivityWhereInput | UserActivityWhereInput[]
    id?: StringFilter<"UserActivity"> | string
    userId?: StringFilter<"UserActivity"> | string
    action?: StringFilter<"UserActivity"> | string
    details?: StringNullableFilter<"UserActivity"> | string | null
    createdAt?: DateTimeFilter<"UserActivity"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserActivityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserActivityWhereInput | UserActivityWhereInput[]
    OR?: UserActivityWhereInput[]
    NOT?: UserActivityWhereInput | UserActivityWhereInput[]
    userId?: StringFilter<"UserActivity"> | string
    action?: StringFilter<"UserActivity"> | string
    details?: StringNullableFilter<"UserActivity"> | string | null
    createdAt?: DateTimeFilter<"UserActivity"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserActivityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserActivityCountOrderByAggregateInput
    _max?: UserActivityMaxOrderByAggregateInput
    _min?: UserActivityMinOrderByAggregateInput
  }

  export type UserActivityScalarWhereWithAggregatesInput = {
    AND?: UserActivityScalarWhereWithAggregatesInput | UserActivityScalarWhereWithAggregatesInput[]
    OR?: UserActivityScalarWhereWithAggregatesInput[]
    NOT?: UserActivityScalarWhereWithAggregatesInput | UserActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserActivity"> | string
    userId?: StringWithAggregatesFilter<"UserActivity"> | string
    action?: StringWithAggregatesFilter<"UserActivity"> | string
    details?: StringNullableWithAggregatesFilter<"UserActivity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserActivity"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementCreateNestedManyWithoutCreatedByInput
    challans?: ChallanCreateNestedManyWithoutCreatedByInput
    activities?: UserActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementUncheckedCreateNestedManyWithoutCreatedByInput
    challans?: ChallanUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: UserActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUpdateManyWithoutCreatedByNestedInput
    challans?: ChallanUpdateManyWithoutCreatedByNestedInput
    activities?: UserActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUncheckedUpdateManyWithoutCreatedByNestedInput
    challans?: ChallanUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: UserActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    customerName: string
    mobile: string
    email: string
    businessName?: string | null
    gstNumber?: string | null
    customerType?: $Enums.CustomerType
    address: string
    status?: $Enums.CustomerStatus
    followUpDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challans?: ChallanCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    customerName: string
    mobile: string
    email: string
    businessName?: string | null
    gstNumber?: string | null
    customerType?: $Enums.CustomerType
    address: string
    status?: $Enums.CustomerStatus
    followUpDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challans?: ChallanUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challans?: ChallanUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challans?: ChallanUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    customerName: string
    mobile: string
    email: string
    businessName?: string | null
    gstNumber?: string | null
    customerType?: $Enums.CustomerType
    address: string
    status?: $Enums.CustomerStatus
    followUpDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    productName: string
    sku: string
    category: string
    unitPrice: number
    currentStock?: number
    minimumStock?: number
    warehouseLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementCreateNestedManyWithoutProductInput
    challanItems?: ChallanItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    productName: string
    sku: string
    category: string
    unitPrice: number
    currentStock?: number
    minimumStock?: number
    warehouseLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
    challanItems?: ChallanItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    minimumStock?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUpdateManyWithoutProductNestedInput
    challanItems?: ChallanItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    minimumStock?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
    challanItems?: ChallanItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    productName: string
    sku: string
    category: string
    unitPrice: number
    currentStock?: number
    minimumStock?: number
    warehouseLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    minimumStock?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    minimumStock?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementCreateInput = {
    id?: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutMovementsInput
    createdBy: UserCreateNestedOneWithoutMovementsInput
  }

  export type InventoryMovementUncheckedCreateInput = {
    id?: string
    productId: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdById: string
    createdAt?: Date | string
  }

  export type InventoryMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutMovementsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementCreateManyInput = {
    id?: string
    productId: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdById: string
    createdAt?: Date | string
  }

  export type InventoryMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallanCreateInput = {
    id?: string
    challanNumber: string
    status?: $Enums.ChallanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutChallansInput
    createdBy: UserCreateNestedOneWithoutChallansInput
    items?: ChallanItemCreateNestedManyWithoutChallanInput
  }

  export type ChallanUncheckedCreateInput = {
    id?: string
    challanNumber: string
    customerId: string
    status?: $Enums.ChallanStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ChallanItemUncheckedCreateNestedManyWithoutChallanInput
  }

  export type ChallanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutChallansNestedInput
    createdBy?: UserUpdateOneRequiredWithoutChallansNestedInput
    items?: ChallanItemUpdateManyWithoutChallanNestedInput
  }

  export type ChallanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ChallanItemUncheckedUpdateManyWithoutChallanNestedInput
  }

  export type ChallanCreateManyInput = {
    id?: string
    challanNumber: string
    customerId: string
    status?: $Enums.ChallanStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallanItemCreateInput = {
    id?: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
    challan: ChallanCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutChallanItemsInput
  }

  export type ChallanItemUncheckedCreateInput = {
    id?: string
    challanId: string
    productId: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
  }

  export type ChallanItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
    challan?: ChallanUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutChallanItemsNestedInput
  }

  export type ChallanItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
  }

  export type ChallanItemCreateManyInput = {
    id?: string
    challanId: string
    productId: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
  }

  export type ChallanItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
  }

  export type ChallanItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
  }

  export type UserActivityCreateInput = {
    id?: string
    action: string
    details?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type UserActivityUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type UserActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type UserActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityCreateManyInput = {
    id?: string
    userId: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type UserActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type InventoryMovementListRelationFilter = {
    every?: InventoryMovementWhereInput
    some?: InventoryMovementWhereInput
    none?: InventoryMovementWhereInput
  }

  export type ChallanListRelationFilter = {
    every?: ChallanWhereInput
    some?: ChallanWhereInput
    none?: ChallanWhereInput
  }

  export type UserActivityListRelationFilter = {
    every?: UserActivityWhereInput
    some?: UserActivityWhereInput
    none?: UserActivityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type InventoryMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChallanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    secretCode?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    secretCode?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    secretCode?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type EnumCustomerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatus | EnumCustomerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerStatusFilter<$PrismaModel> | $Enums.CustomerStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    businessName?: SortOrder
    gstNumber?: SortOrder
    customerType?: SortOrder
    address?: SortOrder
    status?: SortOrder
    followUpDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    businessName?: SortOrder
    gstNumber?: SortOrder
    customerType?: SortOrder
    address?: SortOrder
    status?: SortOrder
    followUpDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    customerName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    businessName?: SortOrder
    gstNumber?: SortOrder
    customerType?: SortOrder
    address?: SortOrder
    status?: SortOrder
    followUpDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type EnumCustomerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatus | EnumCustomerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerStatusWithAggregatesFilter<$PrismaModel> | $Enums.CustomerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerStatusFilter<$PrismaModel>
    _max?: NestedEnumCustomerStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ChallanItemListRelationFilter = {
    every?: ChallanItemWhereInput
    some?: ChallanItemWhereInput
    none?: ChallanItemWhereInput
  }

  export type ChallanItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currentStock?: SortOrder
    minimumStock?: SortOrder
    warehouseLocation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    unitPrice?: SortOrder
    currentStock?: SortOrder
    minimumStock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currentStock?: SortOrder
    minimumStock?: SortOrder
    warehouseLocation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    productName?: SortOrder
    sku?: SortOrder
    category?: SortOrder
    unitPrice?: SortOrder
    currentStock?: SortOrder
    minimumStock?: SortOrder
    warehouseLocation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    unitPrice?: SortOrder
    currentStock?: SortOrder
    minimumStock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InventoryMovementCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMovementMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    type?: SortOrder
    reason?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type EnumChallanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallanStatus | EnumChallanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallanStatus[] | ListEnumChallanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallanStatus[] | ListEnumChallanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallanStatusFilter<$PrismaModel> | $Enums.ChallanStatus
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ChallanCountOrderByAggregateInput = {
    id?: SortOrder
    challanNumber?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallanMaxOrderByAggregateInput = {
    id?: SortOrder
    challanNumber?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChallanMinOrderByAggregateInput = {
    id?: SortOrder
    challanNumber?: SortOrder
    customerId?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumChallanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallanStatus | EnumChallanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallanStatus[] | ListEnumChallanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallanStatus[] | ListEnumChallanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallanStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChallanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallanStatusFilter<$PrismaModel>
    _max?: NestedEnumChallanStatusFilter<$PrismaModel>
  }

  export type ChallanRelationFilter = {
    is?: ChallanWhereInput
    isNot?: ChallanWhereInput
  }

  export type ChallanItemCountOrderByAggregateInput = {
    id?: SortOrder
    challanId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    productNameSnapshot?: SortOrder
    skuSnapshot?: SortOrder
    unitPriceSnapshot?: SortOrder
  }

  export type ChallanItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPriceSnapshot?: SortOrder
  }

  export type ChallanItemMaxOrderByAggregateInput = {
    id?: SortOrder
    challanId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    productNameSnapshot?: SortOrder
    skuSnapshot?: SortOrder
    unitPriceSnapshot?: SortOrder
  }

  export type ChallanItemMinOrderByAggregateInput = {
    id?: SortOrder
    challanId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    productNameSnapshot?: SortOrder
    skuSnapshot?: SortOrder
    unitPriceSnapshot?: SortOrder
  }

  export type ChallanItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPriceSnapshot?: SortOrder
  }

  export type UserActivityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type UserActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type UserActivityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMovementCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InventoryMovementCreateWithoutCreatedByInput, InventoryMovementUncheckedCreateWithoutCreatedByInput> | InventoryMovementCreateWithoutCreatedByInput[] | InventoryMovementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutCreatedByInput | InventoryMovementCreateOrConnectWithoutCreatedByInput[]
    createMany?: InventoryMovementCreateManyCreatedByInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type ChallanCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChallanCreateWithoutCreatedByInput, ChallanUncheckedCreateWithoutCreatedByInput> | ChallanCreateWithoutCreatedByInput[] | ChallanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallanCreateOrConnectWithoutCreatedByInput | ChallanCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChallanCreateManyCreatedByInputEnvelope
    connect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
  }

  export type UserActivityCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput> | UserActivityCreateWithoutUserInput[] | UserActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput | UserActivityCreateOrConnectWithoutUserInput[]
    createMany?: UserActivityCreateManyUserInputEnvelope
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
  }

  export type InventoryMovementUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InventoryMovementCreateWithoutCreatedByInput, InventoryMovementUncheckedCreateWithoutCreatedByInput> | InventoryMovementCreateWithoutCreatedByInput[] | InventoryMovementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutCreatedByInput | InventoryMovementCreateOrConnectWithoutCreatedByInput[]
    createMany?: InventoryMovementCreateManyCreatedByInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type ChallanUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ChallanCreateWithoutCreatedByInput, ChallanUncheckedCreateWithoutCreatedByInput> | ChallanCreateWithoutCreatedByInput[] | ChallanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallanCreateOrConnectWithoutCreatedByInput | ChallanCreateOrConnectWithoutCreatedByInput[]
    createMany?: ChallanCreateManyCreatedByInputEnvelope
    connect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
  }

  export type UserActivityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput> | UserActivityCreateWithoutUserInput[] | UserActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput | UserActivityCreateOrConnectWithoutUserInput[]
    createMany?: UserActivityCreateManyUserInputEnvelope
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InventoryMovementUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutCreatedByInput, InventoryMovementUncheckedCreateWithoutCreatedByInput> | InventoryMovementCreateWithoutCreatedByInput[] | InventoryMovementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutCreatedByInput | InventoryMovementCreateOrConnectWithoutCreatedByInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput | InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InventoryMovementCreateManyCreatedByInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput | InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutCreatedByInput | InventoryMovementUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type ChallanUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChallanCreateWithoutCreatedByInput, ChallanUncheckedCreateWithoutCreatedByInput> | ChallanCreateWithoutCreatedByInput[] | ChallanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallanCreateOrConnectWithoutCreatedByInput | ChallanCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChallanUpsertWithWhereUniqueWithoutCreatedByInput | ChallanUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChallanCreateManyCreatedByInputEnvelope
    set?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    disconnect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    delete?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    connect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    update?: ChallanUpdateWithWhereUniqueWithoutCreatedByInput | ChallanUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChallanUpdateManyWithWhereWithoutCreatedByInput | ChallanUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChallanScalarWhereInput | ChallanScalarWhereInput[]
  }

  export type UserActivityUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput> | UserActivityCreateWithoutUserInput[] | UserActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput | UserActivityCreateOrConnectWithoutUserInput[]
    upsert?: UserActivityUpsertWithWhereUniqueWithoutUserInput | UserActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActivityCreateManyUserInputEnvelope
    set?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    disconnect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    delete?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    update?: UserActivityUpdateWithWhereUniqueWithoutUserInput | UserActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActivityUpdateManyWithWhereWithoutUserInput | UserActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
  }

  export type InventoryMovementUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutCreatedByInput, InventoryMovementUncheckedCreateWithoutCreatedByInput> | InventoryMovementCreateWithoutCreatedByInput[] | InventoryMovementUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutCreatedByInput | InventoryMovementCreateOrConnectWithoutCreatedByInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput | InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InventoryMovementCreateManyCreatedByInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput | InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutCreatedByInput | InventoryMovementUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type ChallanUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ChallanCreateWithoutCreatedByInput, ChallanUncheckedCreateWithoutCreatedByInput> | ChallanCreateWithoutCreatedByInput[] | ChallanUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ChallanCreateOrConnectWithoutCreatedByInput | ChallanCreateOrConnectWithoutCreatedByInput[]
    upsert?: ChallanUpsertWithWhereUniqueWithoutCreatedByInput | ChallanUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ChallanCreateManyCreatedByInputEnvelope
    set?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    disconnect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    delete?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    connect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    update?: ChallanUpdateWithWhereUniqueWithoutCreatedByInput | ChallanUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ChallanUpdateManyWithWhereWithoutCreatedByInput | ChallanUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ChallanScalarWhereInput | ChallanScalarWhereInput[]
  }

  export type UserActivityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput> | UserActivityCreateWithoutUserInput[] | UserActivityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserActivityCreateOrConnectWithoutUserInput | UserActivityCreateOrConnectWithoutUserInput[]
    upsert?: UserActivityUpsertWithWhereUniqueWithoutUserInput | UserActivityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserActivityCreateManyUserInputEnvelope
    set?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    disconnect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    delete?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    connect?: UserActivityWhereUniqueInput | UserActivityWhereUniqueInput[]
    update?: UserActivityUpdateWithWhereUniqueWithoutUserInput | UserActivityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserActivityUpdateManyWithWhereWithoutUserInput | UserActivityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
  }

  export type ChallanCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ChallanCreateWithoutCustomerInput, ChallanUncheckedCreateWithoutCustomerInput> | ChallanCreateWithoutCustomerInput[] | ChallanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChallanCreateOrConnectWithoutCustomerInput | ChallanCreateOrConnectWithoutCustomerInput[]
    createMany?: ChallanCreateManyCustomerInputEnvelope
    connect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
  }

  export type ChallanUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ChallanCreateWithoutCustomerInput, ChallanUncheckedCreateWithoutCustomerInput> | ChallanCreateWithoutCustomerInput[] | ChallanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChallanCreateOrConnectWithoutCustomerInput | ChallanCreateOrConnectWithoutCustomerInput[]
    createMany?: ChallanCreateManyCustomerInputEnvelope
    connect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
  }

  export type EnumCustomerTypeFieldUpdateOperationsInput = {
    set?: $Enums.CustomerType
  }

  export type EnumCustomerStatusFieldUpdateOperationsInput = {
    set?: $Enums.CustomerStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ChallanUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ChallanCreateWithoutCustomerInput, ChallanUncheckedCreateWithoutCustomerInput> | ChallanCreateWithoutCustomerInput[] | ChallanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChallanCreateOrConnectWithoutCustomerInput | ChallanCreateOrConnectWithoutCustomerInput[]
    upsert?: ChallanUpsertWithWhereUniqueWithoutCustomerInput | ChallanUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ChallanCreateManyCustomerInputEnvelope
    set?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    disconnect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    delete?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    connect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    update?: ChallanUpdateWithWhereUniqueWithoutCustomerInput | ChallanUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ChallanUpdateManyWithWhereWithoutCustomerInput | ChallanUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ChallanScalarWhereInput | ChallanScalarWhereInput[]
  }

  export type ChallanUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ChallanCreateWithoutCustomerInput, ChallanUncheckedCreateWithoutCustomerInput> | ChallanCreateWithoutCustomerInput[] | ChallanUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ChallanCreateOrConnectWithoutCustomerInput | ChallanCreateOrConnectWithoutCustomerInput[]
    upsert?: ChallanUpsertWithWhereUniqueWithoutCustomerInput | ChallanUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ChallanCreateManyCustomerInputEnvelope
    set?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    disconnect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    delete?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    connect?: ChallanWhereUniqueInput | ChallanWhereUniqueInput[]
    update?: ChallanUpdateWithWhereUniqueWithoutCustomerInput | ChallanUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ChallanUpdateManyWithWhereWithoutCustomerInput | ChallanUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ChallanScalarWhereInput | ChallanScalarWhereInput[]
  }

  export type InventoryMovementCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type ChallanItemCreateNestedManyWithoutProductInput = {
    create?: XOR<ChallanItemCreateWithoutProductInput, ChallanItemUncheckedCreateWithoutProductInput> | ChallanItemCreateWithoutProductInput[] | ChallanItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChallanItemCreateOrConnectWithoutProductInput | ChallanItemCreateOrConnectWithoutProductInput[]
    createMany?: ChallanItemCreateManyProductInputEnvelope
    connect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
  }

  export type InventoryMovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
  }

  export type ChallanItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ChallanItemCreateWithoutProductInput, ChallanItemUncheckedCreateWithoutProductInput> | ChallanItemCreateWithoutProductInput[] | ChallanItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChallanItemCreateOrConnectWithoutProductInput | ChallanItemCreateOrConnectWithoutProductInput[]
    createMany?: ChallanItemCreateManyProductInputEnvelope
    connect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InventoryMovementUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutProductInput | InventoryMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutProductInput | InventoryMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutProductInput | InventoryMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type ChallanItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<ChallanItemCreateWithoutProductInput, ChallanItemUncheckedCreateWithoutProductInput> | ChallanItemCreateWithoutProductInput[] | ChallanItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChallanItemCreateOrConnectWithoutProductInput | ChallanItemCreateOrConnectWithoutProductInput[]
    upsert?: ChallanItemUpsertWithWhereUniqueWithoutProductInput | ChallanItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ChallanItemCreateManyProductInputEnvelope
    set?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    disconnect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    delete?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    connect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    update?: ChallanItemUpdateWithWhereUniqueWithoutProductInput | ChallanItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ChallanItemUpdateManyWithWhereWithoutProductInput | ChallanItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ChallanItemScalarWhereInput | ChallanItemScalarWhereInput[]
  }

  export type InventoryMovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput> | InventoryMovementCreateWithoutProductInput[] | InventoryMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryMovementCreateOrConnectWithoutProductInput | InventoryMovementCreateOrConnectWithoutProductInput[]
    upsert?: InventoryMovementUpsertWithWhereUniqueWithoutProductInput | InventoryMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryMovementCreateManyProductInputEnvelope
    set?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    disconnect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    delete?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    connect?: InventoryMovementWhereUniqueInput | InventoryMovementWhereUniqueInput[]
    update?: InventoryMovementUpdateWithWhereUniqueWithoutProductInput | InventoryMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryMovementUpdateManyWithWhereWithoutProductInput | InventoryMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
  }

  export type ChallanItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ChallanItemCreateWithoutProductInput, ChallanItemUncheckedCreateWithoutProductInput> | ChallanItemCreateWithoutProductInput[] | ChallanItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ChallanItemCreateOrConnectWithoutProductInput | ChallanItemCreateOrConnectWithoutProductInput[]
    upsert?: ChallanItemUpsertWithWhereUniqueWithoutProductInput | ChallanItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ChallanItemCreateManyProductInputEnvelope
    set?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    disconnect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    delete?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    connect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    update?: ChallanItemUpdateWithWhereUniqueWithoutProductInput | ChallanItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ChallanItemUpdateManyWithWhereWithoutProductInput | ChallanItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ChallanItemScalarWhereInput | ChallanItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutMovementsInput = {
    create?: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementsInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMovementsInput = {
    create?: XOR<UserCreateWithoutMovementsInput, UserUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovementsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType
  }

  export type ProductUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementsInput
    upsert?: ProductUpsertWithoutMovementsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMovementsInput, ProductUpdateWithoutMovementsInput>, ProductUncheckedUpdateWithoutMovementsInput>
  }

  export type UserUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<UserCreateWithoutMovementsInput, UserUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovementsInput
    upsert?: UserUpsertWithoutMovementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMovementsInput, UserUpdateWithoutMovementsInput>, UserUncheckedUpdateWithoutMovementsInput>
  }

  export type CustomerCreateNestedOneWithoutChallansInput = {
    create?: XOR<CustomerCreateWithoutChallansInput, CustomerUncheckedCreateWithoutChallansInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutChallansInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChallansInput = {
    create?: XOR<UserCreateWithoutChallansInput, UserUncheckedCreateWithoutChallansInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallansInput
    connect?: UserWhereUniqueInput
  }

  export type ChallanItemCreateNestedManyWithoutChallanInput = {
    create?: XOR<ChallanItemCreateWithoutChallanInput, ChallanItemUncheckedCreateWithoutChallanInput> | ChallanItemCreateWithoutChallanInput[] | ChallanItemUncheckedCreateWithoutChallanInput[]
    connectOrCreate?: ChallanItemCreateOrConnectWithoutChallanInput | ChallanItemCreateOrConnectWithoutChallanInput[]
    createMany?: ChallanItemCreateManyChallanInputEnvelope
    connect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
  }

  export type ChallanItemUncheckedCreateNestedManyWithoutChallanInput = {
    create?: XOR<ChallanItemCreateWithoutChallanInput, ChallanItemUncheckedCreateWithoutChallanInput> | ChallanItemCreateWithoutChallanInput[] | ChallanItemUncheckedCreateWithoutChallanInput[]
    connectOrCreate?: ChallanItemCreateOrConnectWithoutChallanInput | ChallanItemCreateOrConnectWithoutChallanInput[]
    createMany?: ChallanItemCreateManyChallanInputEnvelope
    connect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
  }

  export type EnumChallanStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChallanStatus
  }

  export type CustomerUpdateOneRequiredWithoutChallansNestedInput = {
    create?: XOR<CustomerCreateWithoutChallansInput, CustomerUncheckedCreateWithoutChallansInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutChallansInput
    upsert?: CustomerUpsertWithoutChallansInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutChallansInput, CustomerUpdateWithoutChallansInput>, CustomerUncheckedUpdateWithoutChallansInput>
  }

  export type UserUpdateOneRequiredWithoutChallansNestedInput = {
    create?: XOR<UserCreateWithoutChallansInput, UserUncheckedCreateWithoutChallansInput>
    connectOrCreate?: UserCreateOrConnectWithoutChallansInput
    upsert?: UserUpsertWithoutChallansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChallansInput, UserUpdateWithoutChallansInput>, UserUncheckedUpdateWithoutChallansInput>
  }

  export type ChallanItemUpdateManyWithoutChallanNestedInput = {
    create?: XOR<ChallanItemCreateWithoutChallanInput, ChallanItemUncheckedCreateWithoutChallanInput> | ChallanItemCreateWithoutChallanInput[] | ChallanItemUncheckedCreateWithoutChallanInput[]
    connectOrCreate?: ChallanItemCreateOrConnectWithoutChallanInput | ChallanItemCreateOrConnectWithoutChallanInput[]
    upsert?: ChallanItemUpsertWithWhereUniqueWithoutChallanInput | ChallanItemUpsertWithWhereUniqueWithoutChallanInput[]
    createMany?: ChallanItemCreateManyChallanInputEnvelope
    set?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    disconnect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    delete?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    connect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    update?: ChallanItemUpdateWithWhereUniqueWithoutChallanInput | ChallanItemUpdateWithWhereUniqueWithoutChallanInput[]
    updateMany?: ChallanItemUpdateManyWithWhereWithoutChallanInput | ChallanItemUpdateManyWithWhereWithoutChallanInput[]
    deleteMany?: ChallanItemScalarWhereInput | ChallanItemScalarWhereInput[]
  }

  export type ChallanItemUncheckedUpdateManyWithoutChallanNestedInput = {
    create?: XOR<ChallanItemCreateWithoutChallanInput, ChallanItemUncheckedCreateWithoutChallanInput> | ChallanItemCreateWithoutChallanInput[] | ChallanItemUncheckedCreateWithoutChallanInput[]
    connectOrCreate?: ChallanItemCreateOrConnectWithoutChallanInput | ChallanItemCreateOrConnectWithoutChallanInput[]
    upsert?: ChallanItemUpsertWithWhereUniqueWithoutChallanInput | ChallanItemUpsertWithWhereUniqueWithoutChallanInput[]
    createMany?: ChallanItemCreateManyChallanInputEnvelope
    set?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    disconnect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    delete?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    connect?: ChallanItemWhereUniqueInput | ChallanItemWhereUniqueInput[]
    update?: ChallanItemUpdateWithWhereUniqueWithoutChallanInput | ChallanItemUpdateWithWhereUniqueWithoutChallanInput[]
    updateMany?: ChallanItemUpdateManyWithWhereWithoutChallanInput | ChallanItemUpdateManyWithWhereWithoutChallanInput[]
    deleteMany?: ChallanItemScalarWhereInput | ChallanItemScalarWhereInput[]
  }

  export type ChallanCreateNestedOneWithoutItemsInput = {
    create?: XOR<ChallanCreateWithoutItemsInput, ChallanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ChallanCreateOrConnectWithoutItemsInput
    connect?: ChallanWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutChallanItemsInput = {
    create?: XOR<ProductCreateWithoutChallanItemsInput, ProductUncheckedCreateWithoutChallanItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChallanItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type ChallanUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ChallanCreateWithoutItemsInput, ChallanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ChallanCreateOrConnectWithoutItemsInput
    upsert?: ChallanUpsertWithoutItemsInput
    connect?: ChallanWhereUniqueInput
    update?: XOR<XOR<ChallanUpdateToOneWithWhereWithoutItemsInput, ChallanUpdateWithoutItemsInput>, ChallanUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutChallanItemsNestedInput = {
    create?: XOR<ProductCreateWithoutChallanItemsInput, ProductUncheckedCreateWithoutChallanItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutChallanItemsInput
    upsert?: ProductUpsertWithoutChallanItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutChallanItemsInput, ProductUpdateWithoutChallanItemsInput>, ProductUncheckedUpdateWithoutChallanItemsInput>
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCustomerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeFilter<$PrismaModel> | $Enums.CustomerType
  }

  export type NestedEnumCustomerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatus | EnumCustomerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerStatusFilter<$PrismaModel> | $Enums.CustomerStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerType | EnumCustomerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerType[] | ListEnumCustomerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerTypeWithAggregatesFilter<$PrismaModel> | $Enums.CustomerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerTypeFilter<$PrismaModel>
    _max?: NestedEnumCustomerTypeFilter<$PrismaModel>
  }

  export type NestedEnumCustomerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatus | EnumCustomerStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCustomerStatusWithAggregatesFilter<$PrismaModel> | $Enums.CustomerStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCustomerStatusFilter<$PrismaModel>
    _max?: NestedEnumCustomerStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type NestedEnumChallanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallanStatus | EnumChallanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallanStatus[] | ListEnumChallanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallanStatus[] | ListEnumChallanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallanStatusFilter<$PrismaModel> | $Enums.ChallanStatus
  }

  export type NestedEnumChallanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChallanStatus | EnumChallanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChallanStatus[] | ListEnumChallanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChallanStatus[] | ListEnumChallanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChallanStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChallanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChallanStatusFilter<$PrismaModel>
    _max?: NestedEnumChallanStatusFilter<$PrismaModel>
  }

  export type InventoryMovementCreateWithoutCreatedByInput = {
    id?: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutMovementsInput
  }

  export type InventoryMovementUncheckedCreateWithoutCreatedByInput = {
    id?: string
    productId: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdAt?: Date | string
  }

  export type InventoryMovementCreateOrConnectWithoutCreatedByInput = {
    where: InventoryMovementWhereUniqueInput
    create: XOR<InventoryMovementCreateWithoutCreatedByInput, InventoryMovementUncheckedCreateWithoutCreatedByInput>
  }

  export type InventoryMovementCreateManyCreatedByInputEnvelope = {
    data: InventoryMovementCreateManyCreatedByInput | InventoryMovementCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ChallanCreateWithoutCreatedByInput = {
    id?: string
    challanNumber: string
    status?: $Enums.ChallanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutChallansInput
    items?: ChallanItemCreateNestedManyWithoutChallanInput
  }

  export type ChallanUncheckedCreateWithoutCreatedByInput = {
    id?: string
    challanNumber: string
    customerId: string
    status?: $Enums.ChallanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ChallanItemUncheckedCreateNestedManyWithoutChallanInput
  }

  export type ChallanCreateOrConnectWithoutCreatedByInput = {
    where: ChallanWhereUniqueInput
    create: XOR<ChallanCreateWithoutCreatedByInput, ChallanUncheckedCreateWithoutCreatedByInput>
  }

  export type ChallanCreateManyCreatedByInputEnvelope = {
    data: ChallanCreateManyCreatedByInput | ChallanCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserActivityCreateWithoutUserInput = {
    id?: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type UserActivityUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type UserActivityCreateOrConnectWithoutUserInput = {
    where: UserActivityWhereUniqueInput
    create: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput>
  }

  export type UserActivityCreateManyUserInputEnvelope = {
    data: UserActivityCreateManyUserInput | UserActivityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InventoryMovementUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: InventoryMovementWhereUniqueInput
    update: XOR<InventoryMovementUpdateWithoutCreatedByInput, InventoryMovementUncheckedUpdateWithoutCreatedByInput>
    create: XOR<InventoryMovementCreateWithoutCreatedByInput, InventoryMovementUncheckedCreateWithoutCreatedByInput>
  }

  export type InventoryMovementUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: InventoryMovementWhereUniqueInput
    data: XOR<InventoryMovementUpdateWithoutCreatedByInput, InventoryMovementUncheckedUpdateWithoutCreatedByInput>
  }

  export type InventoryMovementUpdateManyWithWhereWithoutCreatedByInput = {
    where: InventoryMovementScalarWhereInput
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type InventoryMovementScalarWhereInput = {
    AND?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
    OR?: InventoryMovementScalarWhereInput[]
    NOT?: InventoryMovementScalarWhereInput | InventoryMovementScalarWhereInput[]
    id?: StringFilter<"InventoryMovement"> | string
    productId?: StringFilter<"InventoryMovement"> | string
    quantity?: IntFilter<"InventoryMovement"> | number
    type?: EnumMovementTypeFilter<"InventoryMovement"> | $Enums.MovementType
    reason?: StringFilter<"InventoryMovement"> | string
    createdById?: StringFilter<"InventoryMovement"> | string
    createdAt?: DateTimeFilter<"InventoryMovement"> | Date | string
  }

  export type ChallanUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ChallanWhereUniqueInput
    update: XOR<ChallanUpdateWithoutCreatedByInput, ChallanUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ChallanCreateWithoutCreatedByInput, ChallanUncheckedCreateWithoutCreatedByInput>
  }

  export type ChallanUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ChallanWhereUniqueInput
    data: XOR<ChallanUpdateWithoutCreatedByInput, ChallanUncheckedUpdateWithoutCreatedByInput>
  }

  export type ChallanUpdateManyWithWhereWithoutCreatedByInput = {
    where: ChallanScalarWhereInput
    data: XOR<ChallanUpdateManyMutationInput, ChallanUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ChallanScalarWhereInput = {
    AND?: ChallanScalarWhereInput | ChallanScalarWhereInput[]
    OR?: ChallanScalarWhereInput[]
    NOT?: ChallanScalarWhereInput | ChallanScalarWhereInput[]
    id?: StringFilter<"Challan"> | string
    challanNumber?: StringFilter<"Challan"> | string
    customerId?: StringFilter<"Challan"> | string
    status?: EnumChallanStatusFilter<"Challan"> | $Enums.ChallanStatus
    createdById?: StringFilter<"Challan"> | string
    createdAt?: DateTimeFilter<"Challan"> | Date | string
    updatedAt?: DateTimeFilter<"Challan"> | Date | string
  }

  export type UserActivityUpsertWithWhereUniqueWithoutUserInput = {
    where: UserActivityWhereUniqueInput
    update: XOR<UserActivityUpdateWithoutUserInput, UserActivityUncheckedUpdateWithoutUserInput>
    create: XOR<UserActivityCreateWithoutUserInput, UserActivityUncheckedCreateWithoutUserInput>
  }

  export type UserActivityUpdateWithWhereUniqueWithoutUserInput = {
    where: UserActivityWhereUniqueInput
    data: XOR<UserActivityUpdateWithoutUserInput, UserActivityUncheckedUpdateWithoutUserInput>
  }

  export type UserActivityUpdateManyWithWhereWithoutUserInput = {
    where: UserActivityScalarWhereInput
    data: XOR<UserActivityUpdateManyMutationInput, UserActivityUncheckedUpdateManyWithoutUserInput>
  }

  export type UserActivityScalarWhereInput = {
    AND?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
    OR?: UserActivityScalarWhereInput[]
    NOT?: UserActivityScalarWhereInput | UserActivityScalarWhereInput[]
    id?: StringFilter<"UserActivity"> | string
    userId?: StringFilter<"UserActivity"> | string
    action?: StringFilter<"UserActivity"> | string
    details?: StringNullableFilter<"UserActivity"> | string | null
    createdAt?: DateTimeFilter<"UserActivity"> | Date | string
  }

  export type ChallanCreateWithoutCustomerInput = {
    id?: string
    challanNumber: string
    status?: $Enums.ChallanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutChallansInput
    items?: ChallanItemCreateNestedManyWithoutChallanInput
  }

  export type ChallanUncheckedCreateWithoutCustomerInput = {
    id?: string
    challanNumber: string
    status?: $Enums.ChallanStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: ChallanItemUncheckedCreateNestedManyWithoutChallanInput
  }

  export type ChallanCreateOrConnectWithoutCustomerInput = {
    where: ChallanWhereUniqueInput
    create: XOR<ChallanCreateWithoutCustomerInput, ChallanUncheckedCreateWithoutCustomerInput>
  }

  export type ChallanCreateManyCustomerInputEnvelope = {
    data: ChallanCreateManyCustomerInput | ChallanCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ChallanUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ChallanWhereUniqueInput
    update: XOR<ChallanUpdateWithoutCustomerInput, ChallanUncheckedUpdateWithoutCustomerInput>
    create: XOR<ChallanCreateWithoutCustomerInput, ChallanUncheckedCreateWithoutCustomerInput>
  }

  export type ChallanUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ChallanWhereUniqueInput
    data: XOR<ChallanUpdateWithoutCustomerInput, ChallanUncheckedUpdateWithoutCustomerInput>
  }

  export type ChallanUpdateManyWithWhereWithoutCustomerInput = {
    where: ChallanScalarWhereInput
    data: XOR<ChallanUpdateManyMutationInput, ChallanUncheckedUpdateManyWithoutCustomerInput>
  }

  export type InventoryMovementCreateWithoutProductInput = {
    id?: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutMovementsInput
  }

  export type InventoryMovementUncheckedCreateWithoutProductInput = {
    id?: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdById: string
    createdAt?: Date | string
  }

  export type InventoryMovementCreateOrConnectWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    create: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput>
  }

  export type InventoryMovementCreateManyProductInputEnvelope = {
    data: InventoryMovementCreateManyProductInput | InventoryMovementCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ChallanItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
    challan: ChallanCreateNestedOneWithoutItemsInput
  }

  export type ChallanItemUncheckedCreateWithoutProductInput = {
    id?: string
    challanId: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
  }

  export type ChallanItemCreateOrConnectWithoutProductInput = {
    where: ChallanItemWhereUniqueInput
    create: XOR<ChallanItemCreateWithoutProductInput, ChallanItemUncheckedCreateWithoutProductInput>
  }

  export type ChallanItemCreateManyProductInputEnvelope = {
    data: ChallanItemCreateManyProductInput | ChallanItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type InventoryMovementUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    update: XOR<InventoryMovementUpdateWithoutProductInput, InventoryMovementUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryMovementCreateWithoutProductInput, InventoryMovementUncheckedCreateWithoutProductInput>
  }

  export type InventoryMovementUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryMovementWhereUniqueInput
    data: XOR<InventoryMovementUpdateWithoutProductInput, InventoryMovementUncheckedUpdateWithoutProductInput>
  }

  export type InventoryMovementUpdateManyWithWhereWithoutProductInput = {
    where: InventoryMovementScalarWhereInput
    data: XOR<InventoryMovementUpdateManyMutationInput, InventoryMovementUncheckedUpdateManyWithoutProductInput>
  }

  export type ChallanItemUpsertWithWhereUniqueWithoutProductInput = {
    where: ChallanItemWhereUniqueInput
    update: XOR<ChallanItemUpdateWithoutProductInput, ChallanItemUncheckedUpdateWithoutProductInput>
    create: XOR<ChallanItemCreateWithoutProductInput, ChallanItemUncheckedCreateWithoutProductInput>
  }

  export type ChallanItemUpdateWithWhereUniqueWithoutProductInput = {
    where: ChallanItemWhereUniqueInput
    data: XOR<ChallanItemUpdateWithoutProductInput, ChallanItemUncheckedUpdateWithoutProductInput>
  }

  export type ChallanItemUpdateManyWithWhereWithoutProductInput = {
    where: ChallanItemScalarWhereInput
    data: XOR<ChallanItemUpdateManyMutationInput, ChallanItemUncheckedUpdateManyWithoutProductInput>
  }

  export type ChallanItemScalarWhereInput = {
    AND?: ChallanItemScalarWhereInput | ChallanItemScalarWhereInput[]
    OR?: ChallanItemScalarWhereInput[]
    NOT?: ChallanItemScalarWhereInput | ChallanItemScalarWhereInput[]
    id?: StringFilter<"ChallanItem"> | string
    challanId?: StringFilter<"ChallanItem"> | string
    productId?: StringFilter<"ChallanItem"> | string
    quantity?: IntFilter<"ChallanItem"> | number
    productNameSnapshot?: StringFilter<"ChallanItem"> | string
    skuSnapshot?: StringFilter<"ChallanItem"> | string
    unitPriceSnapshot?: FloatFilter<"ChallanItem"> | number
  }

  export type ProductCreateWithoutMovementsInput = {
    id?: string
    productName: string
    sku: string
    category: string
    unitPrice: number
    currentStock?: number
    minimumStock?: number
    warehouseLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challanItems?: ChallanItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMovementsInput = {
    id?: string
    productName: string
    sku: string
    category: string
    unitPrice: number
    currentStock?: number
    minimumStock?: number
    warehouseLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    challanItems?: ChallanItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMovementsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
  }

  export type UserCreateWithoutMovementsInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challans?: ChallanCreateNestedManyWithoutCreatedByInput
    activities?: UserActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMovementsInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    challans?: ChallanUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: UserActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMovementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMovementsInput, UserUncheckedCreateWithoutMovementsInput>
  }

  export type ProductUpsertWithoutMovementsInput = {
    update: XOR<ProductUpdateWithoutMovementsInput, ProductUncheckedUpdateWithoutMovementsInput>
    create: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMovementsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMovementsInput, ProductUncheckedUpdateWithoutMovementsInput>
  }

  export type ProductUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    minimumStock?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challanItems?: ChallanItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    minimumStock?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challanItems?: ChallanItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserUpsertWithoutMovementsInput = {
    update: XOR<UserUpdateWithoutMovementsInput, UserUncheckedUpdateWithoutMovementsInput>
    create: XOR<UserCreateWithoutMovementsInput, UserUncheckedCreateWithoutMovementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMovementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMovementsInput, UserUncheckedUpdateWithoutMovementsInput>
  }

  export type UserUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challans?: ChallanUpdateManyWithoutCreatedByNestedInput
    activities?: UserActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    challans?: ChallanUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: UserActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomerCreateWithoutChallansInput = {
    id?: string
    customerName: string
    mobile: string
    email: string
    businessName?: string | null
    gstNumber?: string | null
    customerType?: $Enums.CustomerType
    address: string
    status?: $Enums.CustomerStatus
    followUpDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutChallansInput = {
    id?: string
    customerName: string
    mobile: string
    email: string
    businessName?: string | null
    gstNumber?: string | null
    customerType?: $Enums.CustomerType
    address: string
    status?: $Enums.CustomerStatus
    followUpDate?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutChallansInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutChallansInput, CustomerUncheckedCreateWithoutChallansInput>
  }

  export type UserCreateWithoutChallansInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementCreateNestedManyWithoutCreatedByInput
    activities?: UserActivityCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChallansInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementUncheckedCreateNestedManyWithoutCreatedByInput
    activities?: UserActivityUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChallansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChallansInput, UserUncheckedCreateWithoutChallansInput>
  }

  export type ChallanItemCreateWithoutChallanInput = {
    id?: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
    product: ProductCreateNestedOneWithoutChallanItemsInput
  }

  export type ChallanItemUncheckedCreateWithoutChallanInput = {
    id?: string
    productId: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
  }

  export type ChallanItemCreateOrConnectWithoutChallanInput = {
    where: ChallanItemWhereUniqueInput
    create: XOR<ChallanItemCreateWithoutChallanInput, ChallanItemUncheckedCreateWithoutChallanInput>
  }

  export type ChallanItemCreateManyChallanInputEnvelope = {
    data: ChallanItemCreateManyChallanInput | ChallanItemCreateManyChallanInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutChallansInput = {
    update: XOR<CustomerUpdateWithoutChallansInput, CustomerUncheckedUpdateWithoutChallansInput>
    create: XOR<CustomerCreateWithoutChallansInput, CustomerUncheckedCreateWithoutChallansInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutChallansInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutChallansInput, CustomerUncheckedUpdateWithoutChallansInput>
  }

  export type CustomerUpdateWithoutChallansInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutChallansInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerName?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    businessName?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    customerType?: EnumCustomerTypeFieldUpdateOperationsInput | $Enums.CustomerType
    address?: StringFieldUpdateOperationsInput | string
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus
    followUpDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutChallansInput = {
    update: XOR<UserUpdateWithoutChallansInput, UserUncheckedUpdateWithoutChallansInput>
    create: XOR<UserCreateWithoutChallansInput, UserUncheckedCreateWithoutChallansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChallansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChallansInput, UserUncheckedUpdateWithoutChallansInput>
  }

  export type UserUpdateWithoutChallansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUpdateManyWithoutCreatedByNestedInput
    activities?: UserActivityUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChallansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUncheckedUpdateManyWithoutCreatedByNestedInput
    activities?: UserActivityUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChallanItemUpsertWithWhereUniqueWithoutChallanInput = {
    where: ChallanItemWhereUniqueInput
    update: XOR<ChallanItemUpdateWithoutChallanInput, ChallanItemUncheckedUpdateWithoutChallanInput>
    create: XOR<ChallanItemCreateWithoutChallanInput, ChallanItemUncheckedCreateWithoutChallanInput>
  }

  export type ChallanItemUpdateWithWhereUniqueWithoutChallanInput = {
    where: ChallanItemWhereUniqueInput
    data: XOR<ChallanItemUpdateWithoutChallanInput, ChallanItemUncheckedUpdateWithoutChallanInput>
  }

  export type ChallanItemUpdateManyWithWhereWithoutChallanInput = {
    where: ChallanItemScalarWhereInput
    data: XOR<ChallanItemUpdateManyMutationInput, ChallanItemUncheckedUpdateManyWithoutChallanInput>
  }

  export type ChallanCreateWithoutItemsInput = {
    id?: string
    challanNumber: string
    status?: $Enums.ChallanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutChallansInput
    createdBy: UserCreateNestedOneWithoutChallansInput
  }

  export type ChallanUncheckedCreateWithoutItemsInput = {
    id?: string
    challanNumber: string
    customerId: string
    status?: $Enums.ChallanStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallanCreateOrConnectWithoutItemsInput = {
    where: ChallanWhereUniqueInput
    create: XOR<ChallanCreateWithoutItemsInput, ChallanUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutChallanItemsInput = {
    id?: string
    productName: string
    sku: string
    category: string
    unitPrice: number
    currentStock?: number
    minimumStock?: number
    warehouseLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutChallanItemsInput = {
    id?: string
    productName: string
    sku: string
    category: string
    unitPrice: number
    currentStock?: number
    minimumStock?: number
    warehouseLocation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutChallanItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutChallanItemsInput, ProductUncheckedCreateWithoutChallanItemsInput>
  }

  export type ChallanUpsertWithoutItemsInput = {
    update: XOR<ChallanUpdateWithoutItemsInput, ChallanUncheckedUpdateWithoutItemsInput>
    create: XOR<ChallanCreateWithoutItemsInput, ChallanUncheckedCreateWithoutItemsInput>
    where?: ChallanWhereInput
  }

  export type ChallanUpdateToOneWithWhereWithoutItemsInput = {
    where?: ChallanWhereInput
    data: XOR<ChallanUpdateWithoutItemsInput, ChallanUncheckedUpdateWithoutItemsInput>
  }

  export type ChallanUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutChallansNestedInput
    createdBy?: UserUpdateOneRequiredWithoutChallansNestedInput
  }

  export type ChallanUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutChallanItemsInput = {
    update: XOR<ProductUpdateWithoutChallanItemsInput, ProductUncheckedUpdateWithoutChallanItemsInput>
    create: XOR<ProductCreateWithoutChallanItemsInput, ProductUncheckedCreateWithoutChallanItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutChallanItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutChallanItemsInput, ProductUncheckedUpdateWithoutChallanItemsInput>
  }

  export type ProductUpdateWithoutChallanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    minimumStock?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutChallanItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    currentStock?: IntFieldUpdateOperationsInput | number
    minimumStock?: IntFieldUpdateOperationsInput | number
    warehouseLocation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementCreateNestedManyWithoutCreatedByInput
    challans?: ChallanCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    password: string
    secretCode?: string | null
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    movements?: InventoryMovementUncheckedCreateNestedManyWithoutCreatedByInput
    challans?: ChallanUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUpdateManyWithoutCreatedByNestedInput
    challans?: ChallanUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    secretCode?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movements?: InventoryMovementUncheckedUpdateManyWithoutCreatedByNestedInput
    challans?: ChallanUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type InventoryMovementCreateManyCreatedByInput = {
    id?: string
    productId: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdAt?: Date | string
  }

  export type ChallanCreateManyCreatedByInput = {
    id?: string
    challanNumber: string
    customerId: string
    status?: $Enums.ChallanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserActivityCreateManyUserInput = {
    id?: string
    action: string
    details?: string | null
    createdAt?: Date | string
  }

  export type InventoryMovementUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallanUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutChallansNestedInput
    items?: ChallanItemUpdateManyWithoutChallanNestedInput
  }

  export type ChallanUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ChallanItemUncheckedUpdateManyWithoutChallanNestedInput
  }

  export type ChallanUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserActivityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallanCreateManyCustomerInput = {
    id?: string
    challanNumber: string
    status?: $Enums.ChallanStatus
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChallanUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutChallansNestedInput
    items?: ChallanItemUpdateManyWithoutChallanNestedInput
  }

  export type ChallanUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: ChallanItemUncheckedUpdateManyWithoutChallanNestedInput
  }

  export type ChallanUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumChallanStatusFieldUpdateOperationsInput | $Enums.ChallanStatus
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementCreateManyProductInput = {
    id?: string
    quantity: number
    type: $Enums.MovementType
    reason: string
    createdById: string
    createdAt?: Date | string
  }

  export type ChallanItemCreateManyProductInput = {
    id?: string
    challanId: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
  }

  export type InventoryMovementUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type InventoryMovementUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryMovementUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    reason?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChallanItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
    challan?: ChallanUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ChallanItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
  }

  export type ChallanItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    challanId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
  }

  export type ChallanItemCreateManyChallanInput = {
    id?: string
    productId: string
    quantity: number
    productNameSnapshot: string
    skuSnapshot: string
    unitPriceSnapshot: number
  }

  export type ChallanItemUpdateWithoutChallanInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutChallanItemsNestedInput
  }

  export type ChallanItemUncheckedUpdateWithoutChallanInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
  }

  export type ChallanItemUncheckedUpdateManyWithoutChallanInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    productNameSnapshot?: StringFieldUpdateOperationsInput | string
    skuSnapshot?: StringFieldUpdateOperationsInput | string
    unitPriceSnapshot?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallanCountOutputTypeDefaultArgs instead
     */
    export type ChallanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChallanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryMovementDefaultArgs instead
     */
    export type InventoryMovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryMovementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallanDefaultArgs instead
     */
    export type ChallanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChallanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChallanItemDefaultArgs instead
     */
    export type ChallanItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChallanItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserActivityDefaultArgs instead
     */
    export type UserActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserActivityDefaultArgs<ExtArgs>

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
