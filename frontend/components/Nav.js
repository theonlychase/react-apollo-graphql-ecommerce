import Link from 'next/link';

const Nav = () => {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/products">
                <a>Products</a>
            </Link>
            <Link href="/signup">
                <a>Signup</a>
            </Link>
            <Link href="/orders">
                <a>orders</a>
            </Link>
            <Link href="/account">
                <a>Account</a>
            </Link>
        </div>
    )
}

export default Nav;