import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { getTodos } from '../my-api/todosQueries'
import { useEffect } from 'react'
// const axios = require('axios');
import axios, * as others from 'axios';

// Create a client
const queryClient = new QueryClient()

function List() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <Todos />
        </QueryClientProvider>
    )
}

function Todos() {
    // Access the client
    const queryClient = useQueryClient()

    const myfun = () => {
        axios.post('https://regs.temocenter.ru/graphql', qry).then(() => console.log('sdfsdfsd'))
    }


    const qry = {
        "operationName": null,
        "variables":
        {
            "onlyActual": false,
            "pageNumber": 1,
            "search": "",
            "startDate": "2023-10-14",
            "portalIds": [], 
            "districtIds": [],
            "agentIds": [],
            "formeIds": [],
            "audienceIds": [],
            "subjectIds": [],
            "participationTypes": [],
            "categoryPortalIds": [1, 2, 3]
        },
        "query": "query ($portalIds: [Int!], $startDate: String, $finishDate: String, $agentIds: [Int!], $districtIds: [Int!], $formeIds: [Int!], $audienceIds: [Int!], $subjectIds: [Int!], $search: String, $pageNumber: Int, $onlyActual: Boolean, $orderDays: String, $archive: Boolean, $elasticsearch: Boolean, $participationTypes: [Int!], $categoryPortalIds: [Int!]) {\n  eventsList(portalIds: $portalIds, startDate: $startDate, finishDate: $finishDate, agentIds: $agentIds, districtIds: $districtIds, formeIds: $formeIds, audienceIds: $audienceIds, subjectIds: $subjectIds, search: $search, pageNumber: $pageNumber, onlyActual: $onlyActual, orderDays: $orderDays, archive: $archive, elasticsearch: $elasticsearch, participationTypes: $participationTypes, categoryPortalIds: $categoryPortalIds) {\n    pagesCount\n    maxArchiveStartDate\n    maxArchiveFinishDate\n    selectedStartDate\n    selectedFinishDate\n    events {\n      id\n      title\n      seats\n      reservedSeats\n      emptySeats\n      emptySeatsOnline\n      reservedSeatsOnline\n      seatsOnline\n      additionalSeats\n      date\n      startTime\n      finishedTime\n      startRegistration\n      finishedRegistration\n      markEvent\n      audiencesShort\n      participationTypes\n      comments {\n        id\n        reaction {\n          id\n          __typename\n        }\n        __typename\n      }\n      portal {\n        id\n        name\n        logoImage\n        host\n        markEventText\n        markEventImage\n        __typename\n      }\n      audiences {\n        id\n        name\n        __typename\n      }\n      formes {\n        id\n        name\n        __typename\n      }\n      agent {\n        id\n        name\n        logoImage\n        logo {\n          large\n          medium\n          __typename\n        }\n        __typename\n      }\n      house {\n        address\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"
    }


    // Queries
    const { isLoading, error, data } = useQuery({ queryKey: ['todos'], queryFn: getTodos })

    useEffect(() => {
        console.log(isLoading, error, data);

    }, [isLoading])

    return (
        <div>
            {
                isLoading ?
                    <div>Загрузка</div>
                    :
                    Object.keys(data).map((key) => (
                        <div>{key}: {data.id}</div>
                    ))
            }

            <button onClick={myfun}>
                CLICK
            </button>
        </div>
    )
}

export default List


