import ChatsList from "./chats-list";
import Chat from "./chat";

const Index = () => {
    return (
        <div className="lg:flex lg:justify-center lg:p-6 h-screen bg-gray-100">
            <div className="lg:flex lg:gap-3 lg:shadow-md lg:rounded-xl lg:container px-3 py-6 md:px-8 md:py-16 bg-gray-50 h-full">
                <ChatsList/>
                <Chat/>
            </div>
        </div>
    )
}
export default Index