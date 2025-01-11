import { PrismaClient } from '@prisma/client';

interface CustomNodeJsGlobal {
    prisma: PrismaClient;
}

declare const global: CustomNodeJsGlobal;

// console.log("Prisma imported");

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') global.prisma = prisma;

// If prisma exists in prisma, use it
if (global.prisma) {
    // console.log("[existing] Prisma instnace");
}
else {
    // console.log("[new] Prisma instance");
}


export default prisma