import {NavLink} from "react-router-dom";
import '../../components/styles/ticket/chats-list.scss'
import {connect} from 'react-redux'
import {SetUAtiveChatList} from "../../states/actions/chat-list";
import {useEffect} from "react";
import {class_chat_list} from "../../components/class-styles/ticket/class-tickets";

const ChatsList = ({setActiveOrUnActive, chat_list_props}) => {
    useEffect(() => {
        window.onload = () => {
            setActiveOrUnActive(true)
        }
    })
    return (
        <>
            <div className={class_chat_list(chat_list_props)}>
                <p className="font-bold text-2xl text-gray-600">Chat</p>
                {/* type chat ticket */}
                <div className="flex mt-7 w-full xl:w-11/12 border rounded text-gray-500 font-medium container">
                    {/* type ticket */}
                    <NavLink to='/all' className='btn-type-ticket py-1.5 rounded-sm grow'>ALL</NavLink>
                    {/* type ticket */}
                    <NavLink to='/open' className='btn-type-ticket py-1.5 rounded-sm grow'>OPEN</NavLink>
                    {/* type ticket */}
                    <NavLink to='/solved' className='btn-type-ticket py-1.5 rounded-sm grow'>SOLVED</NavLink>
                </div>
                {/* list chats ticket */}
                <div className="mt-8 overflow-y-scroll max-h-[39.5rem]">
                    {/* cover chat list */}
                    <NavLink to='/open/ticket/how-long-does-take-to-payment' onClick={() => setActiveOrUnActive(false)}
                             className='card_list_chats grid grid-flow-col w-full xl:w-11/12 container py-8 sm:px-4 rounded-lg'>
                        {/* image person and notification */}
                        <div className='w-14 relative'>
                            {/* image person */}
                            <img src={require('../../images/person.jpg')} alt="person" className='rounded-full'/>
                        </div>
                        {/* time and question */}
                        <div className='ml-4'>
                            <div className='inline-grid grid-cols-2'>
                                {/* question */}
                                <p className='font-medium truncate w-full mb-0.5 text-gray-700'>How long does it take to
                                    payout and what payout cycle do you provide?</p>
                                {/* time */}
                                <p className='text-gray-400 text-sm ml-auto'>03:04.2022</p>
                            </div>
                            {/* person name and type question */}
                            <div className="grid grid-cols-2 text-gray-400 text-sm py-1.5">
                                {/* person name */}
                                <span>Susanne Bright</span>
                                {/* type question */}
                                <p className='ml-auto'>General Question</p>
                            </div>
                        </div>
                    </NavLink>
                    {/* cover chat list */}
                    <NavLink to='/open/ticket/how-long-does-take-to-payment-testing'
                             onClick={() => setActiveOrUnActive(false)}
                             className='card_list_chats grid grid-flow-col w-full xl:w-11/12 container py-8 sm:px-4 rounded-lg'>
                        {/* image person and notification */}
                        <div className='w-14 relative'>
                            {/* image person */}
                            <img src={require('../../images/person.jpg')} alt="person" className='rounded-full'/>
                            {/* number notification */}
                            <span
                                className='absolute bottom-0 -right-0.5 bg-blue-500 text-white text-xs rounded-full flex justify-center items-center w-5 h-5'>2</span>
                        </div>
                        {/* time and question */}
                        <div className='ml-4'>
                            <div className='inline-grid grid-cols-2'>
                                {/* question */}
                                <p className='font-medium truncate w-full mb-0.5 text-gray-700'>How long does it take to
                                    payout and what payout cycle do you provide?</p>
                                {/* time */}
                                <p className='text-gray-400 text-sm ml-auto'>03:04.2022</p>
                            </div>
                            {/* person name and type question */}
                            <div className="grid grid-cols-2 text-gray-400 text-sm py-1.5">
                                {/* person name */}
                                <span>Susanne Bright</span>
                                {/* type question */}
                                <p className='ml-auto'>General Question</p>
                            </div>
                        </div>
                    </NavLink>
                    {/* cover chat list */}
                    <NavLink to='/open/ticket/how-long-does-take-to-payment-text'
                             onClick={() => setActiveOrUnActive(false)}
                             className='card_list_chats grid grid-flow-col w-full xl:w-11/12 container py-8 sm:px-4 rounded-lg'>
                        {/* image person and notification */}
                        <div className='w-14 relative'>
                            {/* image person */}
                            <img src={require('../../images/person.jpg')} alt="person" className='rounded-full'/>
                            {/* number notification */}
                            <span
                                className='absolute bottom-0 -right-0.5 bg-blue-500 text-white text-xs rounded-full flex justify-center items-center w-5 h-5'>2</span>
                        </div>
                        {/* time and question */}
                        <div className='ml-4'>
                            <div className='inline-grid grid-cols-2'>
                                {/* question */}
                                <p className='font-medium truncate w-full mb-0.5 text-gray-700'>How long does it take to
                                    payout and what payout cycle do you provide?</p>
                                {/* time */}
                                <p className='text-gray-400 text-sm ml-auto'>03:04.2022</p>
                            </div>
                            {/* person name and type question */}
                            <div className="grid grid-cols-2 text-gray-400 text-sm py-1.5">
                                {/* person name */}
                                <span>Susanne Bright</span>
                                {/* type question */}
                                <p className='ml-auto'>General Question</p>
                            </div>
                        </div>
                    </NavLink>
                    {/* cover chat list */}
                    <NavLink to='/open/ticket/how-long-does-take-to-payment-test-as'
                             onClick={() => setActiveOrUnActive(false)}
                             className='card_list_chats grid grid-flow-col w-full xl:w-11/12 container py-8 sm:px-4 rounded-lg'>
                        {/* image person and notification */}
                        <div className='w-14 relative'>
                            {/* image person */}
                            <img src={require('../../images/person.jpg')} alt="person" className='rounded-full'/>
                            {/* number notification */}
                            <span
                                className='absolute bottom-0 -right-0.5 bg-blue-500 text-white text-xs rounded-full flex justify-center items-center w-5 h-5'>2</span>
                        </div>
                        {/* time and question */}
                        <div className='ml-4'>
                            <div className='inline-grid grid-cols-2'>
                                {/* question */}
                                <p className='font-medium truncate w-full mb-0.5 text-gray-700'>How long does it take to
                                    payout and what payout cycle do you provide?</p>
                                {/* time */}
                                <p className='text-gray-400 text-sm ml-auto'>03:04.2022</p>
                            </div>
                            {/* person name and type question */}
                            <div className="grid grid-cols-2 text-gray-400 text-sm py-1.5">
                                {/* person name */}
                                <span>Susanne Bright</span>
                                {/* type question */}
                                <p className='ml-auto'>General Question</p>
                            </div>
                        </div>
                    </NavLink>
                    {/* cover chat list */}
                    <NavLink to='/open/ticket/how-long-does-take-to-payment-texting'
                             onClick={() => setActiveOrUnActive(false)}
                             className='card_list_chats grid grid-flow-col w-full xl:w-11/12 container py-8 sm:px-4 rounded-lg'>
                        {/* image person and notification */}
                        <div className='w-14 relative'>
                            {/* image person */}
                            <img src={require('../../images/person.jpg')} alt="person" className='rounded-full'/>
                            {/* number notification */}
                            <span
                                className='absolute bottom-0 -right-0.5 bg-blue-500 text-white text-xs rounded-full flex justify-center items-center w-5 h-5'>2</span>
                        </div>
                        {/* time and question */}
                        <div className='ml-4'>
                            <div className='inline-grid grid-cols-2'>
                                {/* question */}
                                <p className='font-medium truncate w-full mb-0.5 text-gray-700'>How long does it take to
                                    payout and what payout cycle do you provide?</p>
                                {/* time */}
                                <p className='text-gray-400 text-sm ml-auto'>03:04.2022</p>
                            </div>
                            {/* person name and type question */}
                            <div className="grid grid-cols-2 text-gray-400 text-sm py-1.5">
                                {/* person name */}
                                <span>Susanne Bright</span>
                                {/* type question */}
                                <p className='ml-auto'>General Question</p>
                            </div>
                        </div>
                    </NavLink>
                    {/* cover chat list */}
                    <NavLink to='/open/ticket/how-long-does-take-to-payment-test-as-text'
                             onClick={() => setActiveOrUnActive(false)}
                             className='card_list_chats grid grid-flow-col w-full xl:w-11/12 container py-8 sm:px-4 rounded-lg'>
                        {/* image person and notification */}
                        <div className='w-14 relative'>
                            {/* image person */}
                            <img src={require('../../images/person.jpg')} alt="person" className='rounded-full'/>
                            {/* number notification */}
                            <span
                                className='absolute bottom-0 -right-0.5 bg-blue-500 text-white text-xs rounded-full flex justify-center items-center w-5 h-5'>2</span>
                        </div>
                        {/* time and question */}
                        <div className='ml-4'>
                            <div className='inline-grid grid-cols-2'>
                                {/* question */}
                                <p className='font-medium truncate w-full mb-0.5 text-gray-700'>How long does it take to
                                    payout and what payout cycle do you provide?</p>
                                {/* time */}
                                <p className='text-gray-400 text-sm ml-auto'>03:04.2022</p>
                            </div>
                            {/* person name and type question */}
                            <div className="grid grid-cols-2 text-gray-400 text-sm py-1.5">
                                {/* person name */}
                                <span>Susanne Bright</span>
                                {/* type question */}
                                <p className='ml-auto'>General Question</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
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
export default connect(mapStateToProps, mapDispatchToProps)(ChatsList)