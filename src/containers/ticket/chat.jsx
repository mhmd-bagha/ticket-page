import {AiOutlineSend} from "react-icons/ai";
import {IoMdArrowRoundBack} from "react-icons/io";
import {SetUAtiveChatList} from "../../states/actions/chat-list";
import {connect} from 'react-redux'
import {class_chat} from "../../components/class-styles/ticket/class-tickets";
import {useEffect, useRef} from "react";

const Chat = ({setActiveOrUnActive, chat_list_props}) => {
    // go back for back page true
    useEffect(()=>{
        window.addEventListener("keydown", function (e) {
            console.log(e)
            if (e.keyCode == 37) {
                alert('sdfsdf')
            }
        }, false);
    })
    return (<div className={class_chat(chat_list_props)}>
        {/* header for information ticket as image, time, type ticket and person name */}
        <div className='sticky top-0 md:flex md:items-center md:justify-between bg-gray-50 py-3.5 lg:py-0'>
            {/* data ticket and person and button open and close and button back page to chat list */}
            <div className="flex justify-center px-3.5 lg:px-0">
                {/* button back page to chat list */}
                <button type='button'
                        className='lg:hidden pr-4 text-slate-700 hover:text-slate-800 focus:text-slate-800'
                        onClick={() => {
                            setActiveOrUnActive(true);
                            window.history.back()
                        }}>
                    <IoMdArrowRoundBack size={20}/></button>
                {/* person image */}
                <img src={require('../../images/person.jpg')} alt="person" className='w-14 rounded-full'/>
                {/* box name, time and type ticket */}
                <div className="ml-3 items-center w-10/12 xl:w-full">
                    {/* Question text */}
                    <p className='text-slate-600 font-bold truncate'>How long does it take to payout and what payout
                        cycle do you provide?</p>
                    {/* data ticket and person */}
                    <p className='text-gray-400 text-sm mt-1.5 truncate'>
                        {/* person name */}
                        <span>Susanne Bright | </span>
                        {/* type ticket */}
                        <span>General Question | </span>
                        {/* time */}
                        <span>7th October, 2022</span>
                    </p>
                </div>
            </div>
            {/* button open and close */}
            <div className="hidden md:inline-flex md:items-center">
                {/* button open */}
                <button type='button'
                        className='bg_blue_alice color_blue_cornflower py-1 px-3 rounded-md font-bold'>Open
                </button>
                {/* button close */}
                <button type='button' className='bg_blue_gr py-2.5 px-7 rounded-md font-bold ml-1.5'>Close</button>
            </div>
        </div>
        {/* border bottom line */}
        <div className='border-b border-b-gray-200 mt-5'></div>
        {/* box chats user and admin */}
        <div className="mt-10 pl-6 overflow-y-scroll h-5/6 scroll-smooth">
            {/* box admin */}
            <div className="flex py-3 lg:py-12 justify-start">
                {/* cover person image and time */}
                <div className='hidden lg:block'>
                    <img src={require('../../images/person.jpg')} alt='person'
                         className='w-14 rounded-full'/> {/* image person */}
                    <div className='text-gray-400 text-xs font-medium mt-1'><p>6:21 PM</p><p>4th July</p></div>
                    {/* time */}
                </div>
                {/* cover message */}
                <div
                    className='-ml-5 lg:ml-5 bg_blue_gr p-6 rounded-md rounded-bl-3xl rounded-tr-3xl w-full sm:w-9/12 md:w-7/12 lg:w-8/12 xl:w-6/12 shadow-blue-200 shadow-2xl'>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        dolorum harum illo
                        incidunt minus obcaecati omnis sed temporibus. Ab aperiam architecto aut autem dignissimos
                        eveniet expedita nesciunt nihil quaerat voluptate!</p></div>
            </div>
            {/* box user */}
            <div className="flex py-3 lg:py-12 justify-end">
                {/* cover message */}
                <div
                    className='lg:mr-5 bg_blue_alice text-slate-500 p-6 rounded-md rounded-tl-3xl rounded-br-3xl w-full sm:w-9/12 md:w-7/12 lg:w-8/12 xl:w-6/12 shadow-md'>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        dolorum harum illo
                        incidunt minus obcaecati omnis sed temporibus. Ab aperiam architecto aut autem dignissimos
                        eveniet expedita nesciunt nihil quaerat voluptate!</p></div>
                {/* cover person image and time */}
                <div className='hidden lg:block'>
                    <img src={require('../../images/person.jpg')} alt='person'
                         className='w-14 rounded-full'/> {/* image person */}
                    <div className='text-gray-400 text-xs font-medium mt-1'><p>6:21 PM</p><p>4th July</p></div>
                    {/* time */}
                </div>
            </div>
            {/* box admin */}
            <div className="flex py-3 lg:py-12 justify-start">
                {/* cover person image and time */}
                <div className='hidden lg:block'>
                    <img src={require('../../images/person.jpg')} alt='person'
                         className='w-14 rounded-full'/> {/* image person */}
                    <div className='text-gray-400 text-xs font-medium mt-1'><p>6:21 PM</p><p>4th July</p></div>
                    {/* time */}
                </div>
                {/* cover message */}
                <div
                    className='-ml-5 lg:ml-5 bg_blue_gr p-6 rounded-md rounded-bl-3xl rounded-tr-3xl w-full sm:w-9/12 md:w-7/12 lg:w-8/12 xl:w-6/12 shadow-blue-200 shadow-2xl'>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        dolorum harum illo
                        incidunt minus obcaecati omnis sed temporibus. Ab aperiam architecto aut autem dignissimos
                        eveniet expedita nesciunt nihil quaerat voluptate!</p></div>
            </div>
            {/* box user */}
            <div className="flex py-3 lg:py-12 justify-end">
                {/* cover message */}
                <div
                    className='lg:mr-5 bg_blue_alice text-slate-500 p-6 rounded-md rounded-tl-3xl rounded-br-3xl w-full sm:w-9/12 md:w-7/12 lg:w-8/12 xl:w-6/12 shadow-md'>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        dolorum harum illo
                        incidunt minus obcaecati omnis sed temporibus. Ab aperiam architecto aut autem dignissimos
                        eveniet expedita nesciunt nihil quaerat voluptate!</p></div>
                {/* cover person image and time */}
                <div className='hidden lg:block'>
                    <img src={require('../../images/person.jpg')} alt='person'
                         className='w-14 rounded-full'/> {/* image person */}
                    <div className='text-gray-400 text-xs font-medium mt-1'><p>6:21 PM</p><p>4th July</p></div>
                    {/* time */}
                </div>
            </div>
            {/* box admin */}
            <div className="flex py-3 lg:py-12 justify-start">
                {/* cover person image and time */}
                <div className='hidden lg:block'>
                    <img src={require('../../images/person.jpg')} alt='person'
                         className='w-14 rounded-full'/> {/* image person */}
                    <div className='text-gray-400 text-xs font-medium mt-1'><p>6:21 PM</p><p>4th July</p></div>
                    {/* time */}
                </div>
                {/* cover message */}
                <div
                    className='-ml-5 lg:ml-5 bg_blue_gr p-6 rounded-md rounded-bl-3xl rounded-tr-3xl w-full sm:w-9/12 md:w-7/12 lg:w-8/12 xl:w-6/12 shadow-blue-200 shadow-2xl'>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        dolorum harum illo
                        incidunt minus obcaecati omnis sed temporibus. Ab aperiam architecto aut autem dignissimos
                        eveniet expedita nesciunt nihil quaerat voluptate!</p></div>
            </div>
            {/* box user */}
            <div className="flex py-3 lg:py-12 justify-end">
                {/* cover message */}
                <div
                    className='lg:mr-5 bg_blue_alice text-slate-500 p-6 rounded-md rounded-tl-3xl rounded-br-3xl w-full sm:w-9/12 md:w-7/12 lg:w-8/12 xl:w-6/12 shadow-md'>
                    <p className='font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                        dolorum harum illo
                        incidunt minus obcaecati omnis sed temporibus. Ab aperiam architecto aut autem dignissimos
                        eveniet expedita nesciunt nihil quaerat voluptate!</p></div>
                {/* cover person image and time */}
                <div className='hidden lg:block'>
                    <img src={require('../../images/person.jpg')} alt='person'
                         className='w-14 rounded-full'/> {/* image person */}
                    <div className='text-gray-400 text-xs font-medium mt-1'><p>6:21 PM</p><p>4th July</p></div>
                    {/* time */}
                </div>
            </div>
        </div>
        {/* border top line */}
        <div className='border-t border-t-gray-200 py-2'></div>
        {/* box write message and send */}
        <div className='flex justify-between items-center sticky bottom-0 py-2 sm:py-0 bg-gray-50'>
            {/* text */}
            <textarea placeholder='Type a message...'
                      className='w-full resize-none bg-transparent rounded px-4 outline-none'></textarea>
            {/* button send */}
            <button type='button' className='bg_blue_gr rounded-full p-2 ml-1.5 md:p-1.5 md:ml-0'><AiOutlineSend
                size={20} className='pl-1'/></button>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        chat_list_props: state.tickets
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setActiveOrUnActive: (data) => SetUAtiveChatList(dispatch, data),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)