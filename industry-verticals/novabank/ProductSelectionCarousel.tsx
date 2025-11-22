'use client';

import { useId, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/shadcn/lib/utils';
import CarouselButton from '@/components/non-sitecore/CarouselButton';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductSelectionItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  image?: string;
  badge?: string;
  highlighted?: boolean;
}

interface ProductSelectionCarouselProps {
  title: string;
  subtitle?: string;
  description?: string;
  products: ProductSelectionItem[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  className?: string;
}

const ProductSelectionCarousel = ({
  title,
  subtitle,
  description,
  products,
  autoPlay = false,
  autoPlayDelay = 5000,
  showNavigation = true,
  showPagination = true,
  className = '',
}: ProductSelectionCarouselProps) => {
  const uid = useId();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <section className={cn('py-16 lg:py-20', className)}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          {subtitle && (
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              {subtitle}
            </p>
          )}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Carousel Section */}
        <div className="relative">
          {/* Navigation Buttons */}
          {showNavigation && (
            <>
              <CarouselButton
                direction="prev"
                className={`product-selection-prev-${uid} absolute top-1/2 -left-4 lg:-left-6 -translate-y-1/2 z-10`}
                name="previous-product-selection"
                aria-label="Previous product option"
              />
              <CarouselButton
                direction="next"
                className={`product-selection-next-${uid} absolute top-1/2 -right-4 lg:-right-6 -translate-y-1/2 z-10`}
                name="next-product-selection"
                aria-label="Next product option"
              />
            </>
          )}

          <Swiper
            modules={[Navigation, Autoplay, Keyboard, A11y, Pagination]}
            navigation={
              showNavigation
                ? {
                    prevEl: `.product-selection-prev-${uid}`,
                    nextEl: `.product-selection-next-${uid}`,
                    disabledClass: 'pointer-events-none opacity-50',
                  }
                : false
            }
            pagination={
              showPagination
                ? {
                    el: `.product-selection-pagination-${uid}`,
                    clickable: true,
                    bulletClass: 'swiper-pagination-bullet bg-foreground/30',
                    bulletActiveClass: 'swiper-pagination-bullet-active bg-accent',
                  }
                : false
            }
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 3, spaceBetween: 40 },
            }}
            a11y={{ enabled: true }}
            keyboard={{ enabled: true }}
            loop={products.length > 3}
            autoplay={
              autoPlay
                ? {
                    delay: autoPlayDelay,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                  }
                : false
            }
            onSlideChange={handleSlideChange}
            className="product-selection-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id} className="h-auto">
                <div
                  className={cn(
                    'bg-background border border-border rounded-2xl p-6 lg:p-8 h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-accent/30',
                    product.highlighted && 'border-accent shadow-md'
                  )}
                >
                  {/* Badge */}
                  {product.badge && (
                    <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-xs font-medium bg-accent/10 text-accent rounded-full w-fit">
                      {product.badge}
                    </div>
                  )}

                  {/* Image */}
                  {product.image && (
                    <div className="mb-6 overflow-hidden rounded-lg">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                      {product.title}
                    </h3>
                    
                    <p className="text-foreground/70 mb-6 flex-1">
                      {product.description}
                    </p>

                    {/* Features */}
                    {product.features && product.features.length > 0 && (
                      <ul className="space-y-2 mb-8">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <a
                        href={product.ctaUrl}
                        className={cn(
                          'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full',
                          product.highlighted
                            ? 'bg-accent text-background hover:bg-accent/90'
                            : 'bg-foreground text-background hover:bg-foreground/90'
                        )}
                      >
                        {product.ctaText}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          {showPagination && (
            <div className={`product-selection-pagination-${uid} flex justify-center mt-8 gap-2`} />
          )}
        </div>

        {/* Slide Counter */}
        <div className="flex justify-center mt-6">
          <span className="text-sm text-foreground/60">
            {currentSlide + 1} of {products.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductSelectionCarousel;

// Example usage and mock data for testing
export const mockProductSelectionData: ProductSelectionItem[] = [
  {
    id: '1',
    title: 'Personal Banking',
    description: 'Everyday banking made simple with checking, savings, and digital tools designed for your lifestyle.',
    features: [
      'Mobile and online banking',
      'No minimum balance checking',
      'High-yield savings options',
      'ATM fee reimbursements'
    ],
    ctaText: 'Get Started',
    ctaUrl: '/personal-banking',
    badge: 'Most Popular',
    highlighted: true
  },
  {
    id: '2',
    title: 'Business Banking',
    description: 'Comprehensive banking solutions to help your business grow and manage finances efficiently.',
    features: [
      'Business checking accounts',
      'Merchant services',
      'Business credit cards',
      'Cash management tools'
    ],
    ctaText: 'Learn More',
    ctaUrl: '/business-banking'
  },
  {
    id: '3',
    title: 'Investment Services',
    description: 'Build your wealth with our investment options and professional guidance for your financial future.',
    features: [
      'Portfolio management',
      'Retirement planning',
      'Investment advisory',
      'Market research tools'
    ],
    ctaText: 'Start Investing',
    ctaUrl: '/investments'
  },
  {
    id: '4',
    title: 'Home Loans',
    description: 'Make your homeownership dreams a reality with competitive rates and personalized service.',
    features: [
      'Competitive interest rates',
      'First-time buyer programs',
      'Quick pre-approval',
      'Local lending experts'
    ],
    ctaText: 'Apply Now',
    ctaUrl: '/home-loans'
  },
  {
    id: '5',
    title: 'Credit Cards',
    description: 'Find the perfect credit card with rewards, low rates, and features that match your spending habits.',
    features: [
      'Cashback rewards',
      'Travel benefits',
      'No annual fee options',
      'Fraud protection'
    ],
    ctaText: 'Compare Cards',
    ctaUrl: '/credit-cards'
  }
];

// Example component usage
export const ExampleUsage = () => {
  return (
    <ProductSelectionCarousel
      title="Choose What's Right for You"
      subtitle="Banking Solutions"
      description="Discover the perfect banking solution tailored to your unique needs and financial goals."
      products={mockProductSelectionData}
      autoPlay={false}
      showNavigation={true}
      showPagination={true}
    />
  );
};
