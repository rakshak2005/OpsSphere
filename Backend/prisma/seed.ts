import { PrismaClient, Role, CustomerType, CustomerStatus } from "../src/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // 1. Clean existing database records
  console.log("🧹 Cleaning old records...");
  await prisma.userActivity.deleteMany();
  await prisma.challanItem.deleteMany();
  await prisma.challan.deleteMany();
  await prisma.inventoryMovement.deleteMany();
  await prisma.product.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.user.deleteMany();

  // 2. Create test users with hashed passwords
  console.log("👥 Creating users for all roles...");
  const saltRounds = 10;
  const adminPassword = await bcrypt.hash("admin123", saltRounds);
  const salesPassword = await bcrypt.hash("sales123", saltRounds);
  const warehousePassword = await bcrypt.hash("warehouse123", saltRounds);
  const accountsPassword = await bcrypt.hash("accounts123", saltRounds);

  // Original generic role accounts
  await prisma.user.create({
    data: {
      name: "System Admin",
      email: "admin@opssphere.com",
      password: adminPassword,
      role: Role.ADMIN,
      secretCode: "000",
    },
  });

  await prisma.user.create({
    data: {
      name: "Sales Executive",
      email: "sales@opssphere.com",
      password: salesPassword,
      role: Role.SALES,
      secretCode: "999",
    },
  });

  await prisma.user.create({
    data: {
      name: "Warehouse Manager",
      email: "warehouse@opssphere.com",
      password: warehousePassword,
      role: Role.WAREHOUSE,
      secretCode: "888",
    },
  });

  await prisma.user.create({
    data: {
      name: "Finance Controller",
      email: "accounts@opssphere.com",
      password: accountsPassword,
      role: Role.ACCOUNTS,
      secretCode: "777",
    },
  });

  // Manoj & Vinay (Admins)
  await prisma.user.create({
    data: {
      name: "Manoj (Admin)",
      email: "manoj@opssphere.com",
      password: adminPassword,
      role: Role.ADMIN,
      secretCode: "111",
    },
  });

  await prisma.user.create({
    data: {
      name: "Vinay (Admin)",
      email: "vinay@opssphere.com",
      password: adminPassword,
      role: Role.ADMIN,
      secretCode: "222",
    },
  });

  // Leo & Hari (Sales)
  await prisma.user.create({
    data: {
      name: "Leo (Sales)",
      email: "leo@opssphere.com",
      password: salesPassword,
      role: Role.SALES,
      secretCode: "333",
    },
  });

  await prisma.user.create({
    data: {
      name: "Hari (Sales)",
      email: "hari@opssphere.com",
      password: salesPassword,
      role: Role.SALES,
      secretCode: "444",
    },
  });

  // Anusha & Rakshak (Warehouse)
  await prisma.user.create({
    data: {
      name: "Anusha (Warehouse)",
      email: "anusha@opssphere.com",
      password: warehousePassword,
      role: Role.WAREHOUSE,
      secretCode: "555",
    },
  });

  await prisma.user.create({
    data: {
      name: "Rakshak (Warehouse)",
      email: "rakshak@opssphere.com",
      password: warehousePassword,
      role: Role.WAREHOUSE,
      secretCode: "666",
    },
  });

  // 3. Create test products
  console.log("📦 Creating product catalog...");
  await prisma.product.create({
    data: {
      productName: "Dell Enterprise Laptop",
      sku: "DL-XPS15-01",
      category: "Electronics",
      unitPrice: 75000,
      currentStock: 25,
      minimumStock: 5,
      warehouseLocation: "Rack A-12",
    },
  });

  await prisma.product.create({
    data: {
      productName: "Logitech MX Master 3S",
      sku: "LG-MXM3S-02",
      category: "Accessories",
      unitPrice: 8500,
      currentStock: 100,
      minimumStock: 10,
      warehouseLocation: "Rack B-03",
    },
  });

  await prisma.product.create({
    data: {
      productName: "LG UltraGear 27'",
      sku: "LG-UG27-03",
      category: "Electronics",
      unitPrice: 22000,
      currentStock: 4,
      minimumStock: 5,
      warehouseLocation: "Rack A-05",
    },
  });

  // 4. Create test customers
  console.log("🤝 Creating customer registry...");
  await prisma.customer.create({
    data: {
      customerName: "Rahul Traders",
      mobile: "9876543210",
      email: "rahul@gmail.com",
      businessName: "Rahul Enterprises Ltd",
      gstNumber: "29ABCDE1234F1Z5",
      customerType: CustomerType.DISTRIBUTOR,
      address: "Outer Ring Road, Bangalore, KA",
      status: CustomerStatus.ACTIVE,
      notes: "High priority distributor partner.",
    },
  });

  await prisma.customer.create({
    data: {
      customerName: "Sharma Retail Hub",
      mobile: "9123456789",
      email: "sharma@gmail.com",
      businessName: "Sharma Goods & Co",
      customerType: CustomerType.RETAIL,
      address: "Connaught Place, New Delhi",
      status: CustomerStatus.LEAD,
      notes: "Follow up regarding wholesale catalog.",
    },
  });

  await prisma.customer.create({
    data: {
      customerName: "dayanadha",
      mobile: "08105555265",
      email: "dayanada@gmail.com",
      businessName: "dayanadha enterprices",
      customerType: CustomerType.WHOLESALE,
      address: "M G Road, Bangalore",
      status: CustomerStatus.LEAD,
      notes: "Follow up regarding retail logs.",
    },
  });

  console.log("✨ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
