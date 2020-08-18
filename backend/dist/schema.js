"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var schema_1 = require("nexus-plugin-prisma/schema");
var schema_2 = require("@nexus/schema");
exports.schema = schema_2.makeSchema({
    types: [],
    plugins: [schema_1.nexusSchemaPrisma()],
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
});
