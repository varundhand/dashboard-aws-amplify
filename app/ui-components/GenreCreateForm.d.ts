/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Product } from "../../src/API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GenreCreateFormInputValues = {
    name?: string;
    value?: string;
    Products?: Product[];
};
export declare type GenreCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    value?: ValidationFunction<string>;
    Products?: ValidationFunction<Product>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GenreCreateFormOverridesProps = {
    GenreCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    Products?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type GenreCreateFormProps = React.PropsWithChildren<{
    overrides?: GenreCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GenreCreateFormInputValues) => GenreCreateFormInputValues;
    onSuccess?: (fields: GenreCreateFormInputValues) => void;
    onError?: (fields: GenreCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GenreCreateFormInputValues) => GenreCreateFormInputValues;
    onValidate?: GenreCreateFormValidationValues;
} & React.CSSProperties>;
export default function GenreCreateForm(props: GenreCreateFormProps): React.ReactElement;
