import { ethers } from "hardhat"

async function main() {
    const Inbox = await ethers.getContractFactory("Inbox")

    console.log("🚀 Deploying contract...")
    const inbox = await Inbox.deploy("Hello World!")

    await inbox.waitForDeployment()

    console.log("✅ Inbox deployed to:", inbox.target)
}

main().catch((error) => {
    console.error("❌ Deployment failed:", error)
    process.exit(1)
})