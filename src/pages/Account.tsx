import React, { useState } from 'react';
import mockData from '../data/MOCK_DATA.json';

interface Account {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
}

const listOfAccounts = mockData.map((account) => ({ 
    id: account.id,
    first_name: account.first_name,
    last_name: account.last_name,
    email: account.email,
    gender: account.gender,
    ip_address: account.ip_address,
}));

export default function Account() {
    const [accounts, setAccounts] = useState<Account[]>(listOfAccounts);

    const handleDelete = (id: number) => {
        setAccounts(accounts.filter(account => account.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">List of Accounts</h1>
            <div className="">
                {accounts.map((account) => (
                    <div
                        key={account.id}
                        className="border p-4 shadow hover:shadow-lg transition-shadow"
                    >
                        <div className='text-gray-500'>ID : {account.id}</div>
                        <h2 className="text-xl font-semibold"> First Name: {account.first_name}</h2>
                        <h2 className="text-xl font-semibold"> Last Name: {account.last_name}</h2>
                        <p className="text-gray-600">Email: {account.email}</p>
                        <p className="text-gray-500">Gender: {account.gender}</p>
                        <p className="text-gray-500">IP: {account.ip_address}</p>
                        <button
                            onClick={() => handleDelete(account.id)}
                            className='border-radius-full border-2 hover:bg-red-500 hover:text-white'
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
