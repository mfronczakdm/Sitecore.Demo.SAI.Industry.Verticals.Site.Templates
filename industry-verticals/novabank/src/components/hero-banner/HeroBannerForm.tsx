import {
  Field,
  ImageField,
  LinkField,
  NextImage as ContentSdkImage,
  Text as ContentSdkText,
  RichText as ContentSdkRichText,
  useSitecore,
  Placeholder,
} from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from '@/lib/component-props';
import { isParamEnabled } from '@/helpers/isParamEnabled';
import AccentLine from '@/assets/icons/accent-line/AccentLine';
import { ExploreLink } from '../non-sitecore/ExploreLink';

interface Fields {
  Image: ImageField;
  Video: ImageField;
  Title: Field<string>;
  Description: Field<string>;
  CtaLink: LinkField;
}

interface HeroBannerProps extends ComponentProps {
  fields: Fields;
}

const HeroBannerCommon = ({
  params,
  fields,
  children,
}: HeroBannerProps & {
  children: React.ReactNode;
}) => {
  const { page } = useSitecore();
  const { styles, RenderingIdentifier: id } = params;
  const isPageEditing = page.mode.isEditing;
  const hideGradientOverlay = isParamEnabled(params.HideGradientOverlay);

  if (!fields) {
    return isPageEditing ? (
      <div className={`component hero-banner ${styles}`} id={id}>
        [HERO BANNER]
      </div>
    ) : (
      <></>
    );
  }

  return (
    <div className={`component hero-banner ${styles} relative flex items-center`} id={id}>
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {!isPageEditing && fields?.Video?.value?.src ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={fields.Image?.value?.src}
          >
            <source src={fields.Video?.value?.src} type="video/webm" />
          </video>
        ) : (
          <>
            <ContentSdkImage
              field={fields.Image}
              className="h-full w-full object-cover md:object-bottom"
              priority
            />
          </>
        )}
        {/* Gradient overlay to fade image/video at bottom */}
        {!hideGradientOverlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-85% to-white"></div>
        )}
      </div>

      {children}
    </div>
  );
};

export const Default = ({ params, fields, rendering }: HeroBannerProps) => {
  const hideAccentLine = isParamEnabled(params.HideAccentLine);
  const withPlaceholder = isParamEnabled(params.WithPlaceholder);
  const searchBarPlaceholderKey = `hero-banner-search-bar-${params.DynamicPlaceholderId}`;

  return (
    <HeroBannerCommon params={params} fields={fields} rendering={rendering}>
      {/* Content Container */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4">
          <div className="flex min-h-238 w-full items-center gap-8 py-10">
            {/* Left side - 70% - Text content */}
            <div className="w-full lg:w-[70%]">
              <div className="max-w-182">
                {/* Title */}
                <h1 className="text-left text-5xl leading-[110%] font-bold capitalize md:text-7xl md:leading-[130%] xl:text-[80px]">
                  <ContentSdkText field={fields.Title} />
                  {!hideAccentLine && <AccentLine className="!h-5 w-[9ch]" />}
                </h1>

                {/* Description */}
                <div className="mt-7 text-xl md:text-2xl">
                  <ContentSdkRichText field={fields.Description} className="text-left" />
                </div>

                {/* CTA Link or Placeholder */}
                <div className="mt-6 flex w-full justify-start">
                  {withPlaceholder ? (
                    <Placeholder name={searchBarPlaceholderKey} rendering={rendering} />
                  ) : (
                    <ExploreLink linkText={fields.CtaLink} />
                  )}
                </div>
              </div>
            </div>

            {/* Right side - 30% - Login Form */}
            <div className="w-full lg:w-[30%]">
              <div
                className="rounded-lg p-6"
                style={{ backgroundColor: 'var(--color-background)' }}
              >
                <h2 className="mb-6 text-2xl font-bold">Welcome</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="username" className="mb-2 block text-sm font-medium">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      className="w-full rounded-md border px-4 py-2"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-background)',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="mb-2 block text-sm font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="w-full rounded-md border px-4 py-2"
                      style={{
                        borderColor: 'var(--color-border)',
                        backgroundColor: 'var(--color-background)',
                      }}
                    />
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="remember" name="remember" className="mr-2" />
                    <label htmlFor="remember" className="text-sm">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md px-4 py-2 font-medium"
                    style={{
                      backgroundColor: 'var(--color-accent)',
                      color: 'white',
                    }}
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroBannerCommon>
  );
};

export const Upper30 = ({ params, fields, rendering }: HeroBannerProps) => {
  const hideAccentLine = isParamEnabled(params.HideAccentLine);
  const withPlaceholder = isParamEnabled(params.WithPlaceholder);
  const DarkImage = isParamEnabled(params.DarkImage);
  const searchBarPlaceholderKey = `hero-banner-search-bar-${params.DynamicPlaceholderId}`;

  return (
    <div className="h-[400px] w-full overflow-hidden">
      <HeroBannerCommon params={params} fields={fields} rendering={rendering}>
        {/* Content Container */}
        <div className="relative z-10 h-full w-full">
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="flex w-full gap-8">
              {/* Left side - 70% - Text content */}
              <div className="w-full lg:w-[70%]">
                <div className="max-w-182">
                  {/* Title */}
                  <h1
                    className={`text-left text-5xl leading-[110%] font-bold capitalize md:text-7xl md:leading-[130%] xl:text-[80px] ${DarkImage ? 'text-white' : ''}`}
                  >
                    <ContentSdkText field={fields.Title} />
                    {!hideAccentLine && <AccentLine className="!h-5 w-[9ch]" />}
                  </h1>

                  {/* Description */}
                  <div
                    className={`mt-7 text-xl md:text-2xl ${DarkImage ? 'text-white [&_*]:!text-white' : ''}`}
                  >
                    <ContentSdkRichText field={fields.Description} className="text-left" />
                  </div>

                  {/* CTA Link or Placeholder */}
                  <div className="mt-6 flex w-full justify-start">
                    {withPlaceholder ? (
                      <Placeholder name={searchBarPlaceholderKey} rendering={rendering} />
                    ) : (
                      <div className={DarkImage ? '[&_*]:!border-white [&_*]:!text-white' : ''}>
                        <ExploreLink linkText={fields.CtaLink} />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right side - 30% - Login Form */}
              <div className="w-full lg:w-[30%]">
                <div
                  className="rounded-lg p-6"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <h2 className="mb-6 text-2xl font-bold">Welcome</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="username-upper30" className="mb-2 block text-sm font-medium">
                        Username
                      </label>
                      <input
                        type="text"
                        id="username-upper30"
                        name="username"
                        className="w-full rounded-md border px-4 py-2"
                        style={{
                          borderColor: 'var(--color-border)',
                          backgroundColor: 'var(--color-background)',
                        }}
                      />
                    </div>
                    <div>
                      <label htmlFor="password-upper30" className="mb-2 block text-sm font-medium">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password-upper30"
                        name="password"
                        className="w-full rounded-md border px-4 py-2"
                        style={{
                          borderColor: 'var(--color-border)',
                          backgroundColor: 'var(--color-background)',
                        }}
                      />
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember-upper30"
                        name="remember"
                        className="mr-2"
                      />
                      <label htmlFor="remember-upper30" className="text-sm">
                        Remember me
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-md px-4 py-2 font-medium"
                      style={{
                        backgroundColor: 'var(--color-accent)',
                        color: 'white',
                      }}
                    >
                      Sign In
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroBannerCommon>
    </div>
  );
};
