import React, { JSX } from 'react';
import { ComponentProps } from '@/lib/component-props';
import { Placeholder } from '@sitecore-content-sdk/nextjs';
import { isParamEnabled } from '@/helpers/isParamEnabled';

export type HeaderProps = ComponentProps & {
  params: { [key: string]: string };
};

export const Default = (props: HeaderProps): JSX.Element => {
  const { styles, RenderingIdentifier: id, DynamicPlaceholderId } = props.params;
  const HideMiddlePlaceholder = isParamEnabled(props.params.HideMiddlePlaceholder);
  const HideRightPlaceholder = isParamEnabled(props.params.HideRightPlaceholder);

  return (
    <div className={`component header bg-background ${styles}`} id={id}>
      <div className="container flex items-center gap-3 lg:gap-5">
        <div className="max-lg:order-1 lg:flex-none">
          <Placeholder name={`header-left-${DynamicPlaceholderId}`} rendering={props.rendering} />
        </div>
        {!HideMiddlePlaceholder && (
          <div className="max-lg:order-0 max-lg:mr-auto max-lg:w-2/3 lg:flex-[4_1]">
            <Placeholder name={`header-nav-${DynamicPlaceholderId}`} rendering={props.rendering} />
          </div>
        )}
        {!HideRightPlaceholder && (
          <div className="max-lg:order-2 lg:ml-auto lg:flex-none">
            <Placeholder
              name={`header-right-${DynamicPlaceholderId}`}
              rendering={props.rendering}
            />
          </div>
        )}
      </div>
    </div>
  );
};
