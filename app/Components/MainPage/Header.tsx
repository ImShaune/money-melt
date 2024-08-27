import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

export default function Header () {
    return (
    <nav className='flex justify-between items-center'>
        { /* Logo */ }
        <LogoSection />

        { /* Search Bar */ }
        <SearchBar />
        
        { /* Button */ }
        <Button />

        </nav>
    );
};

function LogoSection () {
    return (
        <div className='flex gap-2 items-center'>
            { /* */ }
            <div 
                className={`bg-gray-900 flex items-center justify-center p-[11px] rounded-lg `}
                >
                {/* icon */}
                <div 
                className='w-[26px] h-[26px] items-center justify-center flex'>
                    <SavingsOutlinedIcon 
                    sx={{ fontSize: "25px" }}
                    className='text-slate-50'
                    
                    />

                </div>
            </div>

            {/* App Name */}
            <div className='flex gap-1 text-[24px] '>
            <span className={`font-bold text-slate-50`}>Money</span>
            <span className='text-slate-50'>Melt</span>
            </div>
        </div>
    );
};

function SearchBar () {
    return (
        <div 
        className={`h-[46px] bg-black-700 flex items-center text-sm rounded-md pl-3 gap-1 w-[300px]  `}
            >
            <div>
            <SearchOutlinedIcon className='text-slate-50' />
            </div>
            <input 
            placeholder='Search an expense...' 
            className='bg-transparent outline-none w-full font-light'
            />

        </div>
    )
}

function Button() {
    return (
        <button
            className='bg-transparent gap-1 p-[12px] flex text-sm rounded-md text-white items-center justify-center pr-[18px] hover:bg-gray-900'
        >
            <AddOutlinedIcon sx={{ fontSize: "20px" }} />
            <span className=''>New Expense</span>

        </button>
    )
}
