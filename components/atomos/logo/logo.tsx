import Link from "next/link"

export const Logo = () => {

    return(
        <>
        <Link href="/"><img src="/logo/logo.svg" width={160} alt="Logo" /></Link>
        </>
    )
}