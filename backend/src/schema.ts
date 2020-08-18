import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import { makeSchema } from '@nexus/schema'

export const schema = makeSchema({
    types: [],
    plugins: [nexusSchemaPrisma()],
    outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts'
    },
    typegenAutoConfig: {
        contextType: 'Context.context',
        sources: [
            {
                source: '@prisma/client',
                alias: 'prisma'
            },
            {
                source: require.resolve('./context'),
                alias: 'Context'
            }
        ]
    }
})