export const ORDER_TYPES = {
    nameAsc: { col: 'name', dir: 'ASC' },
    nameDes: { col: 'name', dir: 'DESC' },
    emailAsc:{ col: 'email', dir: 'ASC' },
    emailDes:{ col: 'email', dir: 'DESC' },
    phoneAsc:{ col: 'phone', dir: 'ASC' },
    phoneDes:{ col: 'phone', dir: 'DESC' },
    timeAsc: { col: 'timestamp', dir: 'ASC' },
    timeDes: { col: 'timestamp', dir: 'DESC' },
}

export const PATTERNS = {
    phone: "[0-9]{3}-[0-9]{7}",
    title: "Please use format: 000 - 0000000"
}