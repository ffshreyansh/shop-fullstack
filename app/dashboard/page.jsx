'use client'
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const YourPage = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
       
        if (!session) {
            router.push('/admin'); 
        }
    }, [session, router]);

    return (
        <div>{
            session ? <p>SS</p> : 
            <p>This page can only be accessed by authenticated users.</p>
        }

        <button onClick={()=> signOut()}>Logout</button>
        </div>
    );
};

export default YourPage;
