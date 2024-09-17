import React from 'react'

const SearchBox = () => {
    return (
        <div>

            <form className="max-w-md mx-auto">
                <div className="flex items-center border border-[#8E8E8E] rounded-xl px-4 py-0.5 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9.77886 0C6.34994 0 3.55772 2.79222 3.55772 6.22114C3.55772 7.71081 4.08019 9.07655 4.95747 10.1482L0 15.1057L0.894289 16L5.85176 11.0425C6.92345 11.9198 8.28919 12.4423 9.77886 12.4423C13.2078 12.4423 16 9.65006 16 6.22114C16 2.79222 13.2078 0 9.77886 0ZM9.77886 1.24423C12.5346 1.24423 14.7558 3.46537 14.7558 6.22114C14.7558 8.97691 12.5346 11.1981 9.77886 11.1981C7.02309 11.1981 4.80194 8.97691 4.80194 6.22114C4.80194 3.46537 7.02309 1.24423 9.77886 1.24423Z" fill="#8E8E8E" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Ex: Transactions"
                        className="ml-2 w-full bg-transparent text-[#8E8E8E] placeholder-[#8E8E8E] focus:outline-none"
                    />
                </div>
            </form>

        </div>
    )
}

export default SearchBox
