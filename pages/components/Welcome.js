import react from "react";

function Welcome() {
    return (
        <>
        <h1 className="text-6xl font-bold">
            Welcome to{' '}
            <a className="text-blue-600" href="https://nextjs.org">
                Next.js!
            </a>
        </h1>
        <p className="mt-3 text-2xl">
                Get started by editing{' '}
                <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
                    pages/index.js
                </code>
            </p>
            </>
    )
}
export default Welcome