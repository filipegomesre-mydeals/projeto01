import PageHeading from '@/components/layout/page-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import {
    Accessibility,
    Bed,
    Bone,
    Brain,
    ChevronDown,
    Chrome,
    ClipboardPlus,
    Dna,
    Ear,
    FilePenLine,
    HeartPulse,
    ScanEye,
    ShieldPlus,
    SquareActivity,
    Stethoscope,
    Syringe,
    Tablets,
    TrendingDown,
    TrendingUp,
    Users,
} from 'lucide-react'
import { DataTable } from '@/components/custom/table/data-table'
import React from 'react'
import { LineChart } from '@/components/custom/charts/line-chart'
import {
    DoctorsTableColumns,
    ITable,
} from '@/components/custom/table/doctors-table-columns'
import {
    IPatientsTable,
    PatientsTableColumns,
} from '@/components/custom/table/patients-table-columns'

const HospitalityDashboard = () => {
    const data: ITable[] = [
        {
            id: 1,
            doctor: {
                image: '/images/avatar.svg',
                name: 'Jerome Bell',
                speciality: 'General Practitioner',
            },
            qualification: 'MBBS, Ph.D',
            exprience: '3 years',
            status: 'Available',
        },
        {
            id: 2,
            doctor: {
                image: '/images/avatar-two.svg',
                name: 'Victoria Alonso',
                speciality: 'Orthopedic',
            },
            qualification: 'MBBS, MD,DM',
            exprience: '1 years',
            status: 'Available',
        },
        {
            id: 3,
            doctor: {
                image: '/images/avatar-three.svg',
                name: 'Arlene McCoy',
                speciality: 'Neurologiest',
            },
            qualification: 'MBBS, MD',
            exprience: '2.5 years',
            status: 'on leave',
        },
        {
            id: 4,
            doctor: {
                image: '/images/avatar-four.svg',
                name: 'Grace Hopper',
                speciality: 'General Practitioner',
            },
            qualification: 'MBBS',
            exprience: '1.5 years',
            status: 'Available',
        },
        {
            id: 5,
            doctor: {
                image: '/images/avatar-six.svg',
                name: 'Darrell Steward',
                speciality: 'Therapist',
            },
            qualification: 'MBBS, MD',
            exprience: '4 years',
            status: 'Available',
        },
        {
            id: 6,
            doctor: {
                image: '/images/avatar-seven.svg',
                name: 'Elizabeth Feinler',
                speciality: 'Dentist',
            },
            qualification: 'MD, Ph.D',
            exprience: '3.5 years',
            status: 'on leave',
        },
        {
            id: 7,
            doctor: {
                image: '/images/avatar-eight.svg',
                name: 'Courtney Henry',
                speciality: 'Eye specialist',
            },
            qualification: 'MD, Ph.D',
            exprience: '2.5 years',
            status: 'Available',
        },
    ]
    const patientsData: IPatientsTable[] = [
        {
            id: 1,
            doctor: {
                image: '/images/avatar-ten.svg',
                name: 'Barbara Liskov',
            },
            gender: 'Male',
            age: 30,
            contact: '+1234567890',
            appointment_date: 'May 5, 2023',
            assigned_doctor: 'Dr. John Smith',
            disease: 'Diabetes',
        },
        {
            id: 2,
            doctor: {
                image: '/images/avatar-eleven.svg',
                name: 'Richard Stallman',
            },
            gender: 'Male',
            age: 23,
            contact: '+01121221121',
            appointment_date: 'June 10, 2023',
            assigned_doctor: 'Dr. Darren Lee',
            disease: 'Hypertension',
        },
        {
            id: 3,
            doctor: {
                image: '/images/avatar-nine.svg',
                name: 'Elizabeth Clark',
            },
            gender: 'Female',
            age: 42,
            contact: '+01266778899',
            appointment_date: 'July 30, 2023',
            assigned_doctor: 'Dr. Karen Mitchell',
            disease: 'Osteoporosis',
        },
        {
            id: 4,
            doctor: {
                image: '/images/avatar-three.svg',
                name: 'James Harris',
            },
            gender: 'Male',
            age: 32,
            contact: '+21212123625',
            appointment_date: 'Aug 2, 2023',
            assigned_doctor: 'Dr. Brian Walker',
            disease: 'General',
        },
        {
            id: 5,
            doctor: {
                image: '/images/avatar-thirty.svg',
                name: 'Williams James',
            },
            gender: 'Male',
            age: 55,
            contact: '+3344556677',
            appointment_date: 'June 15, 2023',
            assigned_doctor: 'Dr. Jason Scott',
            disease: 'Pneumonia',
        },
        {
            id: 6,
            doctor: {
                image: '/images/avatar1.svg',
                name: 'David Brown',
            },
            gender: 'Male',
            age: 50,
            contact: '+0193344551',
            appointment_date: 'June 3, 2023',
            assigned_doctor: 'Dr. Sarah Adams',
            disease: 'High Cholesterol',
        },
        {
            id: 7,
            doctor: {
                image: '/images/avatar5.svg',
                name: 'Sophia Williams',
            },
            gender: 'Female',
            age: 34,
            contact: '+1029356756',
            appointment_date: 'May 15, 2023',
            assigned_doctor: 'Dr. Emily Clark',
            disease: 'Pneumonia',
        },
        {
            id: 8,
            doctor: {
                image: '/images/avatar2.svg',
                name: 'George Harris',
            },
            gender: 'Female',
            age: 25,
            contact: '+01762383690',
            appointment_date: 'Apr 12, 2023',
            assigned_doctor: 'Dr. Lisa Thompson',
            disease: 'Dental',
        },
        {
            id: 9,
            doctor: {
                image: '/images/avatar4.svg',
                name: 'Alice Johnson',
            },
            gender: 'Male',
            age: 21,
            contact: '+12356425698',
            appointment_date: 'Aug 7, 2023',
            assigned_doctor: 'Dr. Susan Lee',
            disease: 'Hypertension',
        },
    ]

    return (
        <div className="relative space-y-4">
            <PageHeading heading={'Hospitality Dashboard'} />

            <div className="min-h-[calc(100vh-160px)] w-full space-y-5">
                <div className="flex flex-col gap-5 xl:grid xl:grid-cols-3">
                    <div className="grid gap-5 xl:col-span-2">
                        <div className="grid shrink-0 grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
                            <Card className="rounded-2xl px-4 py-5 text-center shadow-sm sm:px-5">
                                <Badge
                                    variant={'outline'}
                                    className="size-11 place-content-center"
                                >
                                    <Users className="size-5! text-black dark:text-white" />
                                </Badge>
                                <h3 className="mt-3 min-h-11 font-semibold">
                                    Total Patients
                                </h3>
                                <div className="mt-1.5 flex flex-col items-center gap-1.5">
                                    <h4 className="text-xl/6 font-semibold text-black dark:text-white">
                                        12,457
                                    </h4>
                                    <Badge variant={'green'} size={'small'}>
                                        <TrendingUp />
                                        5.02%
                                    </Badge>
                                </div>
                            </Card>
                            <Card className="rounded-2xl px-4 py-5 text-center shadow-sm sm:px-5">
                                <Badge
                                    variant={'outline'}
                                    className="size-11 place-content-center"
                                >
                                    <FilePenLine className="size-5! text-black dark:text-white" />
                                </Badge>
                                <h3 className="mt-3 min-h-11 font-semibold">
                                    Total Appointments
                                </h3>
                                <div className="mt-1.5 flex flex-col items-center gap-1.5">
                                    <h4 className="text-xl/6 font-semibold text-black dark:text-white">
                                        230
                                    </h4>
                                    <Badge variant={'red'} size={'small'}>
                                        <TrendingDown />
                                        10.12%
                                    </Badge>
                                </div>
                            </Card>
                            <Card className="rounded-2xl px-4 py-5 text-center shadow-sm sm:px-5">
                                <Badge
                                    variant={'outline'}
                                    className="size-11 place-content-center"
                                >
                                    <Stethoscope className="size-5! text-black dark:text-white" />
                                </Badge>
                                <h3 className="mt-3 min-h-11 font-semibold">
                                    Available Doctors
                                </h3>
                                <div className="mt-1.5 flex flex-col items-center gap-1.5">
                                    <h4 className="text-xl/6 font-semibold text-black dark:text-white">
                                        43
                                    </h4>
                                    <Badge variant={'green'} size={'small'}>
                                        <TrendingUp />
                                        2.04%
                                    </Badge>
                                </div>
                            </Card>
                            <Card className="rounded-2xl px-4 py-5 text-center shadow-sm sm:px-5">
                                <Badge
                                    variant={'outline'}
                                    className="size-11 place-content-center"
                                >
                                    <Bed className="size-5! text-black dark:text-white" />
                                </Badge>
                                <h3 className="mt-3 min-h-11 font-semibold">
                                    Available Rooms
                                </h3>
                                <div className="mt-1.5 flex flex-col items-center gap-1.5">
                                    <h4 className="text-xl/6 font-semibold text-black dark:text-white">
                                        156
                                    </h4>
                                    <Badge variant={'red'} size={'small'}>
                                        <TrendingDown />
                                        5.56%
                                    </Badge>
                                </div>
                            </Card>
                        </div>
                        <Card className="shadow-sm">
                            <h3 className="rounded-t-lg border-b border-gray-300 px-4 py-3 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                                Available Treatments
                            </h3>
                            <div className="grid grid-cols-2 flex-wrap gap-4 p-4 sm:flex sm:justify-between [&>div]:grow sm:[&>div]:min-w-40">
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none"
                                        size={'large'}
                                        variant={'red'}
                                    >
                                        <Accessibility className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Cardiology
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none"
                                        size={'large'}
                                        variant={'blue'}
                                    >
                                        <Bone className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Orthopedics
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none"
                                        size={'large'}
                                        variant={'green'}
                                    >
                                        <Syringe className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Pediatrics
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none"
                                        size={'large'}
                                        variant={'purple'}
                                    >
                                        <SquareActivity className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Dermatology
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none"
                                        size={'large'}
                                        variant={'orange'}
                                    >
                                        <Brain className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Neurology
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none"
                                        size={'large'}
                                        variant={'grey-400'}
                                    >
                                        <Tablets className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        General
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none bg-warning/20 text-black dark:text-white"
                                        size={'large'}
                                        variant={'pending'}
                                    >
                                        <HeartPulse className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Operation
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none"
                                        size={'large'}
                                        variant={'red'}
                                    >
                                        <ScanEye className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Eye treatment
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none"
                                        size={'large'}
                                        variant={'blue'}
                                    >
                                        <Ear className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Ears treatment
                                    </span>
                                </Card>
                                <Card className="flex flex-col text-center shadow-sm dark:border dark:border-gray-700/15">
                                    <Badge
                                        className="rounded-b-none bg-success/20 text-black dark:text-white"
                                        size={'large'}
                                        variant={'success'}
                                    >
                                        <ShieldPlus className="mx-auto size-6!" />
                                    </Badge>
                                    <span className="px-3 py-2 font-semibold">
                                        Therapies
                                    </span>
                                </Card>
                            </div>
                        </Card>
                    </div>
                    <Card className="flex flex-col gap-5 p-5 shadow-sm">
                        <h3 className="text-base/5 font-semibold text-black dark:text-white">
                            Patients Overview
                        </h3>
                        <div className="grow">
                            <LineChart
                                className="h-60 p-0 shadow-none xl:h-full"
                                isCardHeaderTitle={false}
                            />
                        </div>
                    </Card>
                </div>
                <div className="flex flex-col gap-4 xl:grid xl:grid-cols-3">
                    <Card className="overflow-hidden xl:col-span-2">
                        <h3 className="rounded-t-lg border-b border-gray-300/20 bg-gray-100 p-5 font-semibold text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            Doctors List
                        </h3>
                        <DataTable
                            className="h-96 overflow-auto rounded-none shadow-none xl:h-[450px]"
                            columns={DoctorsTableColumns}
                            data={data}
                            filterField={'name'}
                            isRemovePagination={false}
                        />
                    </Card>
                    <Card>
                        <div className="flex items-center justify-between gap-4 rounded-t-lg border-b border-gray-300 bg-gray-100 px-5 py-3.5 text-black dark:border-gray-700/50 dark:bg-black/30 dark:text-white">
                            <h3 className="font-semibold">
                                Appointments History
                            </h3>
                            <Button
                                type="button"
                                variant={'outline-general'}
                                className="text-black"
                            >
                                View all
                            </Button>
                        </div>
                        <div className="h-96 divide-y divide-gray-300/40 overflow-y-auto p-5 xl:h-[450px] dark:divide-gray-300/10">
                            <div className="flex items-center justify-between py-3 first:pt-0">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge variant={'outline'}>
                                        <Stethoscope className="size-5!" />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="line-clamp-1 font-medium text-black dark:text-white">
                                            General Checkup
                                        </h4>
                                        <p className="line-clamp-1 text-xs/tight">
                                            Jun 23, 2023
                                        </p>
                                    </div>
                                </div>
                                <Badge variant={'green'}>Completed</Badge>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge variant={'outline'}>
                                        <Syringe className="size-5!" />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="line-clamp-1 font-medium text-black dark:text-white">
                                            Vaccination
                                        </h4>
                                        <p className="line-clamp-1 text-xs/tight">
                                            March 2, 2023
                                        </p>
                                    </div>
                                </div>
                                <Badge
                                    variant={'pending'}
                                    className="bg-warning/40 text-black"
                                >
                                    Rescheduled
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge variant={'outline'}>
                                        <HeartPulse className="size-5!" />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="line-clamp-1 font-medium text-black dark:text-white">
                                            Heart Checkup
                                        </h4>
                                        <p className="line-clamp-1 text-xs/tight">
                                            Apr 15, 2023
                                        </p>
                                    </div>
                                </div>
                                <Badge
                                    variant={'pending'}
                                    className="bg-warning/40 text-black"
                                >
                                    Rescheduled
                                </Badge>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge variant={'outline'}>
                                        <ShieldPlus className="size-5!" />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="line-clamp-1 font-medium text-black dark:text-white">
                                            Full body Checkup
                                        </h4>
                                        <p className="line-clamp-1 text-xs/tight">
                                            Apr 9, 2023
                                        </p>
                                    </div>
                                </div>
                                <Badge variant={'red'}>Cancelled</Badge>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge variant={'outline'}>
                                        <Dna className="size-5!" />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="line-clamp-1 font-medium text-black dark:text-white">
                                            Blood Checkup
                                        </h4>
                                        <p className="line-clamp-1 text-xs/tight">
                                            Feb 16, 2023
                                        </p>
                                    </div>
                                </div>
                                <Badge variant={'green'}>Completed</Badge>
                            </div>
                            <div className="flex items-center justify-between py-3">
                                <div className="flex grow items-center gap-2.5">
                                    <Badge variant={'outline'}>
                                        <ClipboardPlus className="size-5!" />
                                    </Badge>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="line-clamp-1 font-medium text-black dark:text-white">
                                            Follow up Checkup
                                        </h4>
                                        <p className="line-clamp-1 text-xs/tight">
                                            Feb 2, 2023
                                        </p>
                                    </div>
                                </div>
                                <Badge
                                    variant={'pending'}
                                    className="bg-warning/40 text-black"
                                >
                                    Rescheduled
                                </Badge>
                            </div>
                        </div>
                    </Card>
                </div>

                <Card className="overflow-hidden shadow-sm">
                    <CardHeader className="flex items-center justify-between gap-2.5 px-5 py-3.5">
                        <h2 className="whitespace-nowrap text-base/5 font-semibold text-black dark:text-white">
                            Patients overview
                        </h2>
                        <div className="flex items-center gap-2.5">
                            <div id="search-table" className="hidden"></div>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        type="button"
                                        variant={'outline-general'}
                                    >
                                        Sort by
                                        <ChevronDown />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full space-y-1.5 p-1.5">
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:bg-black-dark dark:text-white dark:ring-gray dark:hover:bg-black"
                                    >
                                        Last 1 month
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:bg-black-dark dark:text-white dark:ring-gray dark:hover:bg-black"
                                    >
                                        Last 6 month
                                    </button>
                                    <button
                                        type="button"
                                        className="block w-full rounded-lg px-2.5 py-1.5 text-xs/tight font-medium text-black hover:bg-light-theme ltr:text-left rtl:text-right dark:bg-black-dark dark:text-white dark:ring-gray dark:hover:bg-black"
                                    >
                                        1 year ago
                                    </button>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            columns={PatientsTableColumns}
                            data={patientsData}
                            filterField={'name'}
                            className="rounded-none [&+.pagination]:flex-row [&+.pagination]:flex-wrap [&+.pagination]:border-t [&+.pagination]:border-gray-300/30 [&+.pagination]:bg-gray-200 [&+.pagination]:pe-4 dark:[&+.pagination]:bg-gray-300/5"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
export default HospitalityDashboard
