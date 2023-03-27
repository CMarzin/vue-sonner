import type { Component } from 'vue'

export type ToastTypes = 'normal' | 'action' | 'success' | 'error' | 'loading'

export type PromiseData = {
  loading: string
  success: string | Component
  error: string | Component
}

export type PromiseT = Promise<any> | (() => Promise<any>)

export interface ToastT {
  id: number
  title?: string
  type?: ToastTypes
  icon?: Component
  jsx?: Component
  invert?: boolean
  description?: string
  duration?: number
  important?: boolean
  action?: {
    label: string
    onClick: () => void
  }
  cancel?: {
    label: string
    onClick?: () => void
  }
  promise?: PromiseT
  promiseData?: PromiseData
  style?: any
  className?: string
}

export type Position =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'
  | 'bottom-center'
export interface HeightT {
  height: number
  toastId: number
}

export enum SwipeStateTypes {
  SwipedOut = 'SwipedOut',
  SwipedBack = 'SwipedBack',
  NotSwiped = 'NotSwiped'
}

export type Theme = 'light' | 'dark'

export type ExternalToast = Omit<ToastT, 'id' | 'type' | 'title'>
