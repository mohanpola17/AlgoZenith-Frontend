import Courses from "./Courses";

function Sidebar() {
    return (
        <div>
            <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0 bg-white">
            </div>
            <div className="bg-white" style={{ border: "0", borderColor: "white" }}></div>
            <div className="bg-white" style={{ border: "0", borderColor: "white" }}>
                <div className="flex-col flex">
                    <div className="w-full border-b-2 border-gray-200">
                    </div>
                    <div className="flex   overflow-x-hidden">
                        <div className="bg-white lg:flex md:w-64 md:flex-col hidden">
                            <div className="flex-col pt-5 flex overflow-y-auto">
                                <div className="h-full flex-col justify-between px-4 flex">
                                    <div className="space-y-4">
                                        <div className="bg-top bg-cover space-y-1">
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer" style={{marginTop:"10px",marginBottom:"10px" , gap:"10px"}}>
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H10C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7V10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13H7C6.20435 13 5.44129 12.6839 4.87868 12.1213C4.31607 11.5587 4 10.7956 4 10V7ZM19 7C19 6.20435 19.3161 5.44129 19.8787 4.87868C20.4413 4.31607 21.2044 4 22 4H25C25.7956 4 26.5587 4.31607 27.1213 4.87868C27.6839 5.44129 28 6.20435 28 7V10C28 10.7956 27.6839 11.5587 27.1213 12.1213C26.5587 12.6839 25.7956 13 25 13H22C21.2044 13 20.4413 12.6839 19.8787 12.1213C19.3161 11.5587 19 10.7956 19 10V7ZM4 22C4 21.2044 4.31607 20.4413 4.87868 19.8787C5.44129 19.3161 6.20435 19 7 19H10C10.7956 19 11.5587 19.3161 12.1213 19.8787C12.6839 20.4413 13 21.2044 13 22V25C13 25.7956 12.6839 26.5587 12.1213 27.1213C11.5587 27.6839 10.7956 28 10 28H7C6.20435 28 5.44129 27.6839 4.87868 27.1213C4.31607 26.5587 4 25.7956 4 25V22ZM19 22C19 21.2044 19.3161 20.4413 19.8787 19.8787C20.4413 19.3161 21.2044 19 22 19H25C25.7956 19 26.5587 19.3161 27.1213 19.8787C27.6839 20.4413 28 21.2044 28 22V25C28 25.7956 27.6839 26.5587 27.1213 27.1213C26.5587 27.6839 25.7956 28 25 28H22C21.2044 28 20.4413 27.6839 19.8787 27.1213C19.3161 26.5587 19 25.7956 19 25V22Z" stroke="#172B4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Dashboard</span>
                                            </a>
                                            
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer" style={{marginTop:"10px",marginBottom:"10px" , gap:"10px"}}>
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.884 22.6667H19.1147M16 4V5.33333M24.4853 7.51467L23.5427 8.45733M28 16H26.6667M5.33333 16H4M8.45733 8.45733L7.51467 7.51467M11.2853 20.7147C10.3532 19.7822 9.7184 18.5944 9.4613 17.3012C9.20421 16.008 9.33634 14.6677 9.84097 13.4496C10.3456 12.2315 11.2001 11.1905 12.2964 10.458C13.3927 9.72553 14.6815 9.33458 16 9.33458C17.3185 9.33458 18.6073 9.72553 19.7036 10.458C20.7999 11.1905 21.6544 12.2315 22.159 13.4496C22.6637 14.6677 22.7958 16.008 22.5387 17.3012C22.2816 18.5944 21.6468 19.7822 20.7147 20.7147L19.984 21.444C19.5663 21.8618 19.2349 22.3578 19.0089 22.9036C18.7829 23.4495 18.6666 24.0345 18.6667 24.6253V25.3333C18.6667 26.0406 18.3857 26.7189 17.8856 27.219C17.3855 27.719 16.7072 28 16 28C15.2928 28 14.6145 27.719 14.1144 27.219C13.6143 26.7189 13.3333 26.0406 13.3333 25.3333V24.6253C13.3333 23.432 12.8587 22.2867 12.016 21.444L11.2853 20.7147Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Learn</span>
                                            </a>
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer" style={{marginTop:"10px",marginBottom:"10px",gap:"10px"}}>
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6667 26.6667H29.3334V24C29.3333 23.1687 29.0742 22.3581 28.5922 21.6808C28.1102 21.0036 27.4291 20.4933 26.6437 20.221C25.8583 19.9487 25.0075 19.9279 24.2097 20.1614C23.4119 20.3949 22.7066 20.8712 22.192 21.524M22.6667 26.6667H9.33335M22.6667 26.6667V24C22.6667 23.1253 22.4987 22.2893 22.192 21.524M22.192 21.524C21.6969 20.2866 20.8424 19.226 19.7387 18.4788C18.635 17.7317 17.3328 17.3324 16 17.3324C14.6672 17.3324 13.365 17.7317 12.2614 18.4788C11.1577 19.226 10.3032 20.2866 9.80802 21.524M9.33335 26.6667H2.66669V24C2.66675 23.1687 2.9258 22.3581 3.40784 21.6808C3.88987 21.0036 4.57093 20.4933 5.35635 20.221C6.14177 19.9487 6.99252 19.9279 7.79034 20.1614C8.58815 20.3949 9.29339 20.8712 9.80802 21.524M9.33335 26.6667V24C9.33335 23.1253 9.50135 22.2893 9.80802 21.524M20 9.33334C20 10.3942 19.5786 11.4116 18.8284 12.1618C18.0783 12.9119 17.0609 13.3333 16 13.3333C14.9392 13.3333 13.9217 12.9119 13.1716 12.1618C12.4214 11.4116 12 10.3942 12 9.33334C12 8.27248 12.4214 7.25506 13.1716 6.50492C13.9217 5.75477 14.9392 5.33334 16 5.33334C17.0609 5.33334 18.0783 5.75477 18.8284 6.50492C19.5786 7.25506 20 8.27248 20 9.33334ZM28 13.3333C28 14.0406 27.7191 14.7189 27.219 15.219C26.7189 15.7191 26.0406 16 25.3334 16C24.6261 16 23.9478 15.7191 23.4477 15.219C22.9476 14.7189 22.6667 14.0406 22.6667 13.3333C22.6667 12.6261 22.9476 11.9478 23.4477 11.4477C23.9478 10.9476 24.6261 10.6667 25.3334 10.6667C26.0406 10.6667 26.7189 10.9476 27.219 11.4477C27.7191 11.9478 28 12.6261 28 13.3333ZM9.33335 13.3333C9.33335 14.0406 9.0524 14.7189 8.5523 15.219C8.05221 15.7191 7.37393 16 6.66669 16C5.95944 16 5.28117 15.7191 4.78107 15.219C4.28097 14.7189 4.00002 14.0406 4.00002 13.3333C4.00002 12.6261 4.28097 11.9478 4.78107 11.4477C5.28117 10.9476 5.95944 10.6667 6.66669 10.6667C7.37393 10.6667 8.05221 10.9476 8.5523 11.4477C9.0524 11.9478 9.33335 12.6261 9.33335 13.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Forums</span>
                                            </a>
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer" style={{marginTop:"10px",marginBottom:"10px",gap:"10px"}}>
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6.66667H9.33335C8.62611 6.66667 7.94783 6.94762 7.44774 7.44772C6.94764 7.94781 6.66669 8.62609 6.66669 9.33333V25.3333C6.66669 26.0406 6.94764 26.7189 7.44774 27.219C7.94783 27.719 8.62611 28 9.33335 28H22.6667C23.3739 28 24.0522 27.719 24.5523 27.219C25.0524 26.7189 25.3334 26.0406 25.3334 25.3333V9.33333C25.3334 8.62609 25.0524 7.94781 24.5523 7.44772C24.0522 6.94762 23.3739 6.66667 22.6667 6.66667H20M12 6.66667C12 7.37391 12.281 8.05219 12.7811 8.55229C13.2812 9.05238 13.9594 9.33333 14.6667 9.33333H17.3334C18.0406 9.33333 18.7189 9.05238 19.219 8.55229C19.7191 8.05219 20 7.37391 20 6.66667M12 6.66667C12 5.95942 12.281 5.28115 12.7811 4.78105C13.2812 4.28095 13.9594 4 14.6667 4H17.3334C18.0406 4 18.7189 4.28095 19.219 4.78105C19.7191 5.28115 20 5.95942 20 6.66667" stroke="#172B4D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Upskill</span>
                                            </a>
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer" style={{marginTop:"10px",marginBottom:"10px",gap:"10px"}}>
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 25.3333V17.3333C12 16.6261 11.719 15.9478 11.219 15.4477C10.7189 14.9476 10.0406 14.6667 9.33333 14.6667H6.66667C5.95942 14.6667 5.28115 14.9476 4.78105 15.4477C4.28095 15.9478 4 16.6261 4 17.3333V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H9.33333C10.0406 28 10.7189 27.719 11.219 27.219C11.719 26.7189 12 26.0406 12 25.3333ZM12 25.3333V12C12 11.2928 12.281 10.6145 12.781 10.1144C13.2811 9.61428 13.9594 9.33333 14.6667 9.33333H17.3333C18.0406 9.33333 18.7189 9.61428 19.219 10.1144C19.719 10.6145 20 11.2928 20 12V25.3333M12 25.3333C12 26.0406 12.281 26.7189 12.781 27.219C13.2811 27.719 13.9594 28 14.6667 28H17.3333C18.0406 28 18.7189 27.719 19.219 27.219C19.719 26.7189 20 26.0406 20 25.3333M20 25.3333V6.66667C20 5.95942 20.281 5.28115 20.781 4.78105C21.2811 4.28095 21.9594 4 22.6667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V25.3333C28 26.0406 27.719 26.7189 27.219 27.219C26.7189 27.719 26.0406 28 25.3333 28H22.6667C21.9594 28 21.2811 27.719 20.781 27.219C20.281 26.7189 20 26.0406 20 25.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Contest</span>
                                            </a>
                                            <a href="#" className="font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
                    transition-all duration-200 hover:bg-gray-200 group cursor-pointer" style={{marginTop:"10px",marginBottom:"10px" , gap:"10px"}}>
                                                <span className="justify-center items-center flex">
                                                    <span className="justify-center items-center flex">
                                                        <span className="justify-center items-center flex">
                                                            <span className="items-center justify-center flex">
                                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.732 3.90266C15.132 2.67466 16.8693 2.67466 17.268 3.90266L19.2933 10.1347C19.3805 10.402 19.5499 10.6349 19.7774 10.8001C20.0049 10.9654 20.2788 11.0545 20.56 11.0547H27.1133C28.4053 11.0547 28.9413 12.708 27.8973 13.468L22.596 17.3187C22.3683 17.4842 22.1988 17.7176 22.1119 17.9854C22.0249 18.2531 22.025 18.5416 22.112 18.8093L24.136 25.0413C24.536 26.2707 23.1293 27.292 22.0853 26.532L16.784 22.6813C16.5562 22.5157 16.2817 22.4265 16 22.4265C15.7183 22.4265 15.4439 22.5157 15.216 22.6813L9.91467 26.532C8.87067 27.292 7.464 26.2693 7.864 25.0413L9.88801 18.8093C9.97504 18.5416 9.97509 18.2531 9.88815 17.9854C9.80121 17.7176 9.63173 17.4842 9.40401 17.3187L4.10267 13.468C3.05734 12.708 3.59601 11.0547 4.88667 11.0547H11.4387C11.7201 11.0547 11.9943 10.9658 12.222 10.8005C12.4498 10.6353 12.6194 10.4022 12.7067 10.1347L14.732 3.90266Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                                            </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span>Ledarboard</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{height:"100vh" , width:"100%"}}>
                            <Courses/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div >

    );
}

export default Sidebar;