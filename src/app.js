import getData from "./lib/service"

async function main() {
    const result = await getData(1)
    console.log(result)
}

main()