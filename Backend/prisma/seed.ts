import { PrismaClient, Role, CustomerType, CustomerStatus } from "../src/generated/prisma";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // 1. Clean existing database records
  console.log("🧹 Cleaning old records...");
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

  const admin = await prisma.user.create({
    data: {
      name: "System Admin",
      email: "admin@opssphere.com",
      password: adminPassword,
      role: Role.ADMIN,
    },
  });

  const sales = await prisma.user.create({
    data: {
      name: "Sales Executive",
      email: "sales@opssphere.com",
      password: salesPassword,
      role: Role.SALES,
    },
  });

  const warehouse = await prisma.user.create({
    data: {
      name: "Warehouse Manager",
      email: "warehouse@opssphere.com",
      password: warehousePassword,
      role: Role.WAREHOUSE,
    },
  });

  const accounts = await prisma.user.create({
    data: {
      name: "Finance Controller",
      email: "accounts@opssphere.com",
      password: accountsPassword,
      role: Role.ACCOUNTS,
    },
  });

  // 3. Create test products
  console.log("📦 Creating product catalog...");
  const laptop = await prisma.product.create({
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

  const mouse = await prisma.product.create({
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

  const monitor = await prisma.product.create({
    data: {
      productName: "LG UltraGear 27'",
      sku: "LG-UG27-03",
      category: "Electronics",
      unitPrice: 22000,
      currentStock: 4, // Starts below minimumStock (5) to trigger low stock filters
      minimumStock: 5,
      warehouseLocation: "Rack A-05",
    },
  });

  // 4. Create test customers
  console.log("🤝 Creating customer registry...");
  const customer1 = await prisma.customer.create({
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

  const customer2 = await prisma.customer.create({
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

  console.log("✨ Seeding completed successfully!");
  console.log(`
  Login Credentials:
  ----------------------------------------
  ADMIN:      admin@opssphere.com     / admin123
  SALES:      sales@opssphere.com     / sales123
  WAREHOUSE:  warehouse@opssphere.com / warehouse123
  ACCOUNTS:   accounts@opssphere.com  / accounts123
  `);
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
