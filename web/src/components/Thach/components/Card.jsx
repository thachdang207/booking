import React from "react";

function Card(props) {
    return (
        <>
            <header class="px-5 py-4 border-b border-gray-100">
                <h2 class="font-semibold text-gray-800">Customers</h2>
            </header>
            <div class="p-3">
                <div class="overflow-x-auto">
                <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Name</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Email</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Spent</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                        <div class="font-semibold text-left">Country</div>
                        </th>
                    </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                    <tr>
                        <td class="p-2 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img class="rounded-full" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBERISGBUYLxoaL2NCOEJjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//CABEIAEgASAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAEBQYHAwIAAf/aAAgBAQAAAADXvX0/Es7sE7sGvwtTTG7B28JIvOdJ0nPaY5jNZYg3RJx6U/5D5013Dp4g6oWHlBNoIjgdPRLRWTIXOae/mKSrI4T8yQymrw5j7AimfX//xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oACgICEAMQAAAAYgYmRqiLuG1ARtebzUu0wIaphFk//8QALBAAAgEEAQIGAgICAwAAAAAAAQIDAAQFESEGEgcTIjFBURRhUnEyoRCB0f/aAAgBAQABPwD/AJ6k6rxnT1ru6uFErD0RryzVZ+Kjmby4sUzJ9tLomsZ4s4y6uPKvbSa1H8we8CluorqyFxayrLE67R0OwRVuKTZ9I/kCaEkf8xU+RWKXsGiKyfUUFhYTXMpGkUms1c3GUv5MhdsWnkPpT3CL8CklPmhFJeT4WMbNHpjKZXFvfx2U0V5Dye5decv/ALXQvV9xhrp7K6L/AIzHUkTe6H7FWxDIrIQVI2D91JcJEjxknuY0gQw7HI177q5kgRyASa6ruBMYLZSewku/9CstkxJI8UB49mcfP6rw86bgt8fHfSxhriTnZHtSAqmipFeI+BiFqmbtodTQHUxQf5JXQ18b/pu2LHbRkxGsowEzDu1tPf69zuom3bbI0de1ZCdhO21CgV1pmzJO8FudcdruK6UxQzPUVtbONxBu56vRDiccAtpcyxgaVLYHf+qxf5Ut0lzBaXlqHAby5pGPG9c7NdbyZFoJLYwzPB5bFgj9oavCS6L4S6jbkpIOKy+3u3hXhmVUDf3xUl7PDCD5yHj6rIXtzM0xkkIZt/8AQrM+qQsB6fv7roO+tosvFGFZJ+dt8GrTJxoRHIQQRV1kbG0ILSRwxkEs7cCnymOuQ0vejQkepiOBXhhewvms1BbKWgkmMkbD2C7NdUvJD58sQYuE2Avv7AD/AG1PhrUqoE++329VZmQiG7ZTyWVN/QNXDfls6shOh6OKxUb2OVg7u6ORjxsVhrqO/tu2TQnj4ZaurfKwdxtWhlgb4MXcyV4gZK7ssRBYTTFrq7DEqFCiOKvCa4Fv1T5JJCzW7VnFkWUuhG2OuaSUg1e9O29/cPIs0kYk/wA4wNgmpPDi+JHlSL2k7UMNFatPCe5mlWS8vgg2D6E9QrMdGZCzYXOMlMjJ7dh7XFWt71FHZSrL5S3KbCCaMqSfjeqzVvmJOoBcZ3kzcB15VV+hXhnhy3Ukt+0ifj2ymOH7es1IUVWUjlz6vo8cChJxWFxssLpc3Cab3jj+f7NQgxgdwUMfgUqGQbOz+hxUtvo8W6n991Za0l7JJFRT2Hvb71V9iYc7HHZSyNGjSBmK/IHxUSpjboNbWxW3WTyvLRBwvyay0SrjGljY+W8/eF19irW5a1nSdApZDsBhsVYzq1jFdsD3SKCoP3VsTIxY81HJunAZeDU8fq79bHsR9ioYfxs95O+EcgUZEtr8rIB2Oe4Vm1LYtVjAIMg/Wq//xAAbEQACAgMBAAAAAAAAAAAAAAAAEQECEBIxQf/aAAgBAgEBPwBm0DjN+FRlMWPBlSRCNRoZGZ4I/8QAHREAAgIDAQEBAAAAAAAAAAAAAAECERASMQNBUf/aAAgBAwEBPwBRb4atCTxR5dJu2JE0RaoifSif5hM2Y5uiK2JqmLPn0l0//9k=" width="40" height="40" alt="Alex Shatov" />
                            </div>
                            <div class="font-medium text-gray-800">Alex Shatov</div>
                        </div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                        <div class="text-left">alexshatov@gmail.com</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                        <div class="text-left font-medium text-green-500">$2,890.66</div>
                        </td>
                        <td class="p-2 whitespace-nowrap">
                        <div class="text-lg text-center">🇺🇸</div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </>
    );
}

export default Card;
