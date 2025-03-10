import dynamic from 'next/dynamic';
import { ComponentType, ReactNode } from 'react';
import React from 'react';

/**
 * Helper function to lazily load components with consistent configuration
 * @param importFunc - Dynamic import function
 * @param fallback - Loading component
 * @param ssr - Whether to render on server
 * @returns Dynamically loaded component
 */
export function lazyLoadComponent<T>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  fallback: ReactNode = null,
  ssr = true
) {
  return dynamic(importFunc, {
    loading: () => React.createElement(React.Fragment, null, fallback),
    ssr,
  });
} 