import React from 'react'
import Link from 'next/link'

export default function RedirectToSignIn() {
    return (
        <div className="flex justify-center items-center">
            <h1>You&apos;re not signed in please</h1>
            <Link href="/signin"><a className="rounded-2xl mx-5 bg-blue-300 p-2">go to sign in page</a></Link>
        </div>
    )
}
