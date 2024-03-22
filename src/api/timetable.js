export async function getTimeTable(request) {
    // const axios = getAxiosInstance(request.token);

    // const response = await axios.get(
    //     `/api/v1/promises/${request.eventId}/members/${request.userId}`
    // );

    // return response.data;

    if (request.userId === 1) {
        return [
            {
                date: '2024-03-28',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                    1, 1, 1, 1,
                ],
            },
            {
                date: '2024-03-29',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
                    1, 1, 1, 1,
                ],
            },
            {
                date: '2024-03-30',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1,
                ],
            },
            {
                date: '2024-03-31',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 1,
                ],
            },
            {
                date: '2024-04-01',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-02',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-03',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-04',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
        ];
    } else if (request.userId === 2) {
        return [
            {
                date: '2024-03-28',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
                    1, 1, 1, 0,
                ],
            },
            {
                date: '2024-03-29',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                    1, 1, 0, 0,
                ],
            },
            {
                date: '2024-03-30',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-03-31',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-01',
                items: [
                    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-02',
                items: [
                    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-03',
                items: [
                    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-04',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
        ];
    } else if (request.userId === 3) {
        return [
            {
                date: '2024-03-28',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1,
                    1, 1, 1, 0,
                ],
            },
            {
                date: '2024-03-29',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0,
                    1, 1, 1, 1,
                ],
            },
            {
                date: '2024-03-30',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-03-31',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-01',
                items: [
                    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-02',
                items: [
                    0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-03',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-04',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
        ];
    } else if (request.userId === 4) {
        return [
            {
                date: '2024-03-28',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
                    1, 1, 1, 0,
                ],
            },
            {
                date: '2024-03-29',
                items: [
                    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-03-30',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-03-31',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-01',
                items: [
                    0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-02',
                items: [
                    0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
                    1, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-03',
                items: [
                    0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 0, 0, 0,
                ],
            },
            {
                date: '2024-04-04',
                items: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0,
                ],
            },
        ];
    }
}

export async function postTimeTable(request) {
    // const axios = getAxiosInstance(request.token);

    // const bodyData = request.list;

    // const response = await axios.post(
    //     `/api/v1/promises/${request.eventId}/members/${request.userId}`,
    //     bodyData
    // );

    // return response.data;

    return {
        status: 200,
    };
}