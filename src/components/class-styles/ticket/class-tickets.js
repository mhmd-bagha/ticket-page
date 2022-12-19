let class_name = ''

export const class_chat_list = (props) => {
    switch (props.back_page) {
        case undefined:
            class_name = 'lg:w-6/12';
            break;
        case true:
            class_name = 'w-full';
            break;
        case false:
            class_name = 'hidden';
            break;
        default:
            class_name = ''
    }
    return class_name
}

export const class_chat = (props) => {
    switch (props.back_page) {
        case undefined:
            class_name = 'w-full';
            break;
        case true:
            class_name = 'hidden';
            break;
        case false:
            class_name = 'w-full';
            break;
        default:
            class_name = ''
    }
    return class_name
}