'use client';
import React, { useState } from 'react';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution';
import { SchemaEditor } from '../../components/schema-editor/SchemaEditor';

const initialSchema = {
    title: "Person",
    type: "object",
    properties: {
        name: { type: "string", title: "Name" },
        addressline1: { type: "string", title: "Address Line 1" },
        addressline2: { type: "string", title: "Address Line 2" },
        city: { type: "string", title: "City" }
    }
};

interface ContentSchemasEditSchemaProps {
    contentSchemaID: number;
}

export function ContentSchemasEditPage({ contentSchemaID }: ContentSchemasEditSchemaProps) {
    const [fileName, setFileName] = useState('/schemas/landing/christmas-2024.yml');
    const [schema, setSchema] = useState<any>(initialSchema);
    return <SchemaEditor fileName={fileName} defaultSchema={schema} onSave={setSchema} />
}
