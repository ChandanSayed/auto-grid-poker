import React from 'react';

const ShadowContainer = ({ children }) => {
  return <section className="relative mx-auto max-w-designSize">{children}</section>;
};

export default ShadowContainer;
