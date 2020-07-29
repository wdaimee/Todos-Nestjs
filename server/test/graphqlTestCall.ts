import { graphql } from 'graphql';


export const graphqlTestCall = async (
    query: any,
    variables?: any,
    userId?: number | string
) => {
    return graphql(
        schema,
        query,
        undefined,
        {
            req: {
                session: {
                    userId
                }
            },
            res: {
                clearCookie: () => {}
            }
        },
        variables
    )
};