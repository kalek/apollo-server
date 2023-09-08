import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "product", loc: { start: 22, end: 29 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: { kind: "Name", value: "id", loc: { start: 30, end: 32 } },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 34, end: 36 },
                  },
                  loc: { start: 34, end: 36 },
                },
                loc: { start: 34, end: 37 },
              },
              directives: [],
              loc: { start: 30, end: 37 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Product",
              loc: { start: 40, end: 47 },
            },
            loc: { start: 40, end: 47 },
          },
          directives: [],
          loc: { start: 22, end: 47 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "products",
            loc: { start: 50, end: 58 },
          },
          arguments: [],
          type: {
            kind: "ListType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Product",
                loc: { start: 61, end: 68 },
              },
              loc: { start: 61, end: 68 },
            },
            loc: { start: 60, end: 69 },
          },
          directives: [],
          loc: { start: 50, end: 69 },
        },
      ],
      loc: { start: 0, end: 71 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Product", loc: { start: 78, end: 85 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 90, end: 92 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "ID", loc: { start: 94, end: 96 } },
              loc: { start: 94, end: 96 },
            },
            loc: { start: 94, end: 97 },
          },
          directives: [],
          loc: { start: 90, end: 97 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "name", loc: { start: 100, end: 104 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 106, end: 112 },
              },
              loc: { start: 106, end: 112 },
            },
            loc: { start: 106, end: 113 },
          },
          directives: [],
          loc: { start: 100, end: 113 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "price", loc: { start: 116, end: 121 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Float",
                loc: { start: 123, end: 128 },
              },
              loc: { start: 123, end: 128 },
            },
            loc: { start: 123, end: 129 },
          },
          directives: [],
          loc: { start: 116, end: 129 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "category",
            loc: { start: 132, end: 140 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 142, end: 148 },
              },
              loc: { start: 142, end: 148 },
            },
            loc: { start: 142, end: 149 },
          },
          directives: [],
          loc: { start: 132, end: 149 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "coverImage",
            loc: { start: 152, end: 162 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Image",
              loc: { start: 164, end: 169 },
            },
            loc: { start: 164, end: 169 },
          },
          directives: [],
          loc: { start: 152, end: 169 },
        },
      ],
      loc: { start: 73, end: 171 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Image", loc: { start: 178, end: 183 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "src", loc: { start: 188, end: 191 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 193, end: 199 },
              },
              loc: { start: 193, end: 199 },
            },
            loc: { start: 193, end: 200 },
          },
          directives: [],
          loc: { start: 188, end: 200 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "alt", loc: { start: 203, end: 206 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 208, end: 214 },
              },
              loc: { start: 208, end: 214 },
            },
            loc: { start: 208, end: 215 },
          },
          directives: [],
          loc: { start: 203, end: 215 },
        },
      ],
      loc: { start: 173, end: 217 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 223, end: 228 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 218, end: 228 },
    },
  ],
  loc: { start: 0, end: 229 },
} as unknown as DocumentNode;
