import qs from "qs";



// поиск конкретного элемента
/*
export const filterDeal = (value: Array<number>): string => {
    return qs.stringify({
        populate: "deep",
        filters: {
            id: {
                $eq: value,
            },
        },
    }, {
        encodeValuesOnly: true, // prettify URL
    });
}
*/

// пагинация 10 элементов на странице
/*
export const pagination = (page: string): string => {
    return qs.stringify({
        populate: "deep",
        pagination: {
            page: page,
            pageSize: 10,
        },
    }, {
        encodeValuesOnly: true, // prettify URL
    });
}
*/
// получение всех элементов

export const populate = (): string => {
    return qs.stringify(
        {
            populate: "deep",
        },
        {
            encodeValuesOnly: true, // prettify URL
        }
    );
};


