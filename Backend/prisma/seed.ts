import { PrismaClient, Role, CustomerType, CustomerStatus } from "@prisma/client";
import * as bcrypt from "bcrypt";

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
      name: "Anusha",
      email: "anusha@opssphere.com",
      password: warehousePassword,
      role: Role.WAREHOUSE,
      secretCode: "555",
    },
  });

  await prisma.user.create({
    data: {
      name: "Rakshak",
      email: "rakshak@opssphere.com",
      password: warehousePassword,
      role: Role.WAREHOUSE,
      secretCode: "666",
    },
  });

  // 3. Create test catalog items
  console.log("📦 Creating product catalog (10 items total)...");
  
  const products = [
    {
      productName: "Dell UltraSharp 24 Monitor",
      sku: "DELL-US24-01",
      category: "Electronics",
      unitPrice: 15499,
      currentStock: 45,
      minimumStock: 8,
      warehouseLocation: "Rack A-12",
    },
    {
      productName: "Logitech MX Master 3S",
      sku: "LG-MXM3S-02",
      category: "Accessories",
      unitPrice: 8500,
      currentStock: 100,
      minimumStock: 10,
      warehouseLocation: "Rack B-03",
    },
    {
      productName: "LG UltraGear 27'",
      sku: "LG-UG27-03",
      category: "Electronics",
      unitPrice: 22000,
      currentStock: 4,
      minimumStock: 5,
      warehouseLocation: "Rack A-05",
    },
    {
      productName: "Keychron K2 V2 Keyboard",
      sku: "KC-K2V2-04",
      category: "Accessories",
      unitPrice: 7999,
      currentStock: 35,
      minimumStock: 6,
      warehouseLocation: "Rack B-04",
    },
    {
      productName: "Sony WH-1000XM5",
      sku: "SN-XM5-05",
      category: "Electronics",
      unitPrice: 29990,
      currentStock: 18,
      minimumStock: 4,
      warehouseLocation: "Rack A-08",
    },
    {
      productName: "Apple MacBook Air M3",
      sku: "AP-MBA-M3",
      category: "Electronics",
      unitPrice: 114900,
      currentStock: 12,
      minimumStock: 3,
      warehouseLocation: "Rack C-01",
    },
    {
      productName: "Ergonomic Office Chair",
      sku: "FUR-ERGO-06",
      category: "Furniture",
      unitPrice: 12500,
      currentStock: 15,
      minimumStock: 2,
      warehouseLocation: "Section D-01",
    },
    {
      productName: "Anker USB-C Hub 8-in-1",
      sku: "AK-HUB8-07",
      category: "Accessories",
      unitPrice: 4200,
      currentStock: 60,
      minimumStock: 15,
      warehouseLocation: "Rack B-09",
    },
    {
      productName: "Seagate Expansion 2TB",
      sku: "SG-EXT2TB-08",
      category: "Storage",
      unitPrice: 5800,
      currentStock: 22,
      minimumStock: 5,
      warehouseLocation: "Rack B-15",
    },
    {
      productName: "Samsung T7 Shield 1TB",
      sku: "SS-SSD1TB-09",
      category: "Storage",
      unitPrice: 9500,
      currentStock: 3,
      minimumStock: 5,
      warehouseLocation: "Rack B-16",
    }
  ];

  for (const prod of products) {
    await prisma.product.create({ data: prod });
  }

  // 4. Create 10 test customers
  console.log("🤝 Creating customer registry (10 total)...");
  
  const customers = [
    {
      customerName: "Rahul Traders",
      mobile: "9876543210",
      email: "rahul@gmail.com",
      businessName: "Rahul Enterprises Ltd",
      gstNumber: "29ABCDE1234F1Z5",
      customerType: CustomerType.DISTRIBUTOR,
      address: "Outer Ring Road, Bangalore, KA",
      status: CustomerStatus.ACTIVE,
      notes: "High priority distributor partner.",
      followUpDate: new Date(Date.now() - 172800000).toISOString(), // Overdue 2 days
    },
    {
      customerName: "Sharma Retail Hub",
      mobile: "9123456789",
      email: "sharma@gmail.com",
      businessName: "Sharma Goods & Co",
      customerType: CustomerType.RETAIL,
      address: "Connaught Place, New Delhi",
      status: CustomerStatus.LEAD,
      notes: "Follow up regarding wholesale catalog.",
      followUpDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
    },
    {
      customerName: "dayanadha",
      mobile: "08105555265",
      email: "dayanada@gmail.com",
      businessName: "dayanadha enterprices",
      customerType: CustomerType.WHOLESALE,
      address: "M G Road, Bangalore",
      status: CustomerStatus.LEAD,
      notes: "Follow up regarding retail logs.",
    },
    {
      customerName: "Sanjay Logistics",
      mobile: "9945231267",
      email: "sanjay@logistics.com",
      businessName: "Sanjay Roadlines",
      gstNumber: "29AABSJ4422F1Z8",
      customerType: CustomerType.DISTRIBUTOR,
      address: "Peenya Industrial Area, Bangalore",
      status: CustomerStatus.ACTIVE,
      notes: "Logistics partner and distributor.",
    },
    {
      customerName: "Apex Retailers",
      mobile: "9880123456",
      email: "orders@apexretail.in",
      businessName: "Apex Multi-brand Stores",
      customerType: CustomerType.RETAIL,
      address: "Vasant Kunj, New Delhi",
      status: CustomerStatus.ACTIVE,
      notes: "Monthly recurring wholesale orders.",
    },
    {
      customerName: "Karthik & Sons",
      mobile: "8050334455",
      email: "karthik@sons.com",
      businessName: "Karthik Trading Co",
      customerType: CustomerType.WHOLESALE,
      address: "George Town, Chennai",
      status: CustomerStatus.LEAD,
      notes: "Interested in electronic displays.",
    },
    {
      customerName: "Vertex Global",
      mobile: "7022119933",
      email: "procurement@vertex.com",
      businessName: "Vertex Global Exports",
      gstNumber: "33AAAVX9911D1Z9",
      customerType: CustomerType.DISTRIBUTOR,
      address: "HITEC City, Hyderabad",
      status: CustomerStatus.ACTIVE,
      notes: "Export distributor.",
    },
    {
      customerName: "Nisha Enterprises",
      mobile: "9448002233",
      email: "nisha@enterprises.com",
      customerType: CustomerType.WHOLESALE,
      address: "Marathahalli, Bangalore",
      status: CustomerStatus.INACTIVE,
      notes: "No recent activity in 90 days.",
    },
    {
      customerName: "Pioneer Goods",
      mobile: "9900998877",
      email: "pioneer@goods.co",
      businessName: "Pioneer Wholesale Ltd",
      customerType: CustomerType.DISTRIBUTOR,
      address: "Sector 17, Chandigarh",
      status: CustomerStatus.ACTIVE,
      notes: "New North India distributor.",
    },
    {
      customerName: "Sai Electronics",
      mobile: "9108123478",
      email: "sai.elec@gmail.com",
      customerType: CustomerType.RETAIL,
      address: "Jayanagar 4th Block, Bangalore",
      status: CustomerStatus.LEAD,
      notes: "Inquired about Dell Monitor stock.",
      followUpDate: new Date().toISOString(), // Today
    }
  ];

  for (const cust of customers) {
    await prisma.customer.create({ data: cust });
  }

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
