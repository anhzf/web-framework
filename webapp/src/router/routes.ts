import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/room/reservation',
    name: 'RoomReservation',
    component: () => import('../pages/RoomReservationList.vue'),
  },
  {
    path: '/room/:roomId/reservation',
    name: 'RoomReservation_View',
    component: () => import('../pages/RoomReservationForm.vue'),
  },
  {
    path: '/room/reservation/new',
    name: 'RoomReservation_Create',
    component: () => import('../pages/RoomReservationForm.vue'),
    meta: { guard: 'member' },
  },
  {
    path: '/room/manage',
    name: 'RoomManagement',
    component: () => import('../pages/RoomManagement.vue'),
    meta: { guard: 'admin' },
  },
  {
    path: '/room/:roomId/manage',
    name: 'RoomManagement_View',
    component: () => import('../pages/RoomManagementForm.vue'),
    meta: { guard: 'admin' },
  },
  {
    path: '/room/manage/new',
    name: 'RoomManagement_Create',
    component: () => import('../pages/RoomManagementForm.vue'),
    meta: { guard: 'admin' },
  },
  {
    path: '/facility/reservation',
    name: 'FacilityReservation',
    component: () => import('../pages/FacilityReservationList.vue'),
  },
  {
    path: '/facility/:facilityId/reservation',
    name: 'FacilityReservation_View',
    component: () => import('../pages/FacilityReservationForm.vue'),
  },
  {
    path: '/facility/reservation/new',
    name: 'FacilityReservation_Create',
    component: () => import('../pages/FacilityReservationForm.vue'),
    meta: { guard: 'member' },
  },
  {
    path: '/facility/manage',
    name: 'FacilityManagement',
    component: () => import('../pages/FacilityManagement.vue'),
    meta: { guard: 'admin' },
  },
  {
    path: '/facility/:facilityId/manage',
    name: 'FacilityManagement_View',
    component: () => import('../pages/FacilityManagementForm.vue'),
    meta: { guard: 'admin' },
  },
  {
    path: '/facility/manage/new',
    name: 'FacilityManagement_Create',
    component: () => import('../pages/FacilityManagementForm.vue'),
    meta: { guard: 'admin' },
  },
  {
    path: '/reservation',
    name: 'ReservationVerification',
    component: () => import('../pages/ReservationVerification.vue'),
    meta: { guard: 'admin' },
  },
  {
    path: '/member/manage',
    name: 'MemberManagement',
    component: () => import('../pages/MemberManagement.vue'),
    meta: { guard: 'admin' },
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../pages/SignIn.vue'),
    meta: { guard: 'guest' },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../pages/SignUp.vue'),
    meta: { guard: 'guest' },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../pages/Settings.vue'),
    meta: { guard: 'member' },
  },
];

export default routes;
