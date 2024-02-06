
export type TServiceName = {
    id: string;
    serviceName: string;
}

export type TServiceData = {
    image: string;
    list: TServiceName[];
    title: string;
    description: string;
}

export type TAdminServiceCard = TServiceData & { _id: string };