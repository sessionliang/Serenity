﻿declare namespace Serenity {
    interface PropertyItem {
        name?: string;
        title?: string;
        hint?: string;
        placeholder?: string;
        editorType?: string;
        editorParams?: any;
        category?: string;
        cssClass?: string;
        maxLength?: number;
        required?: boolean;
        insertable?: boolean;
        insertPermission?: string;
        hideOnInsert?: boolean;
        updatable?: boolean;
        updatePermission?: string;
        hideOnUpdate?: boolean;
        readOnly?: boolean;
        readPermission?: string;
        oneWay?: boolean;
        defaultValue?: any;
        localizable?: boolean;
        visible?: boolean;
        formatterType?: string;
        formatterParams?: any;
        displayFormat?: string;
        alignment?: string;
        width?: number;
        minWidth?: number;
        maxWidth?: number;
        resizable?: boolean;
        sortable?: boolean;
        sortOrder?: number;
        editLink?: boolean;
        editLinkItemType?: string;
        editLinkIdField?: string;
        editLinkCssClass?: string;
        filteringType?: string;
        filteringParams?: any;
        filteringIdField?: string;
        notFilterable?: boolean;
        filterOnly?: boolean;
        quickFilter?: boolean;
        quickFilterParams?: any;
    }
}