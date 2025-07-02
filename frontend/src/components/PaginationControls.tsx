import React, { memo, useCallback, useEffect } from 'react';
import { measureRenderTime } from '../utils/performance';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * A component for navigating between pages.
 *
 * It displays "Previous" and "Next" buttons and a list of page numbers
 * to allow the user to navigate through a paginated list.
 * Memoized to prevent unnecessary re-renders.
 *
 * @param {PaginationControlsProps} props The properties for the pagination controls.
 * @returns {React.ReactElement} The pagination controls component.
 */
const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // In development, measure the render time
  useEffect(() => {
    measureRenderTime('PaginationControls');
  }, []);

  if (totalPages <= 1) {
    return null; // Don't render controls if there's only one page or less
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const buttonBaseStyle = "px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow";
  const disabledStyle = "opacity-50 cursor-not-allowed bg-gray-200 text-gray-500";
  const enabledStyle = "bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-500 hover:text-white";
  const activeStyle = "bg-indigo-600 text-white border-indigo-600";

  // Memoize the page change handlers
  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, totalPages, onPageChange]);

  // Create a factory function for page click handlers to avoid creating new functions on each render
  const createPageClickHandler = useCallback(
    (page: number) => () => onPageChange(page),
    [onPageChange]
  );

  return (
    <div className="flex justify-center items-center space-x-2 my-12">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`${buttonBaseStyle} ${currentPage === 1 ? disabledStyle : enabledStyle}`}
        aria-label="Go to previous page"
      >
        Anterior
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={createPageClickHandler(page)}
          className={`${buttonBaseStyle} ${page === currentPage ? activeStyle : enabledStyle}`}
          aria-label={`Go to page ${page}`}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`${buttonBaseStyle} ${currentPage === totalPages ? disabledStyle : enabledStyle}`}
        aria-label="Go to next page"
      >
        Următor
      </button>
    </div>
  );
};

/**
 * Custom comparison function for PaginationControls
 * Only re-render if pagination-related props change
 */
const areEqual = (
  prevProps: PaginationControlsProps,
  nextProps: PaginationControlsProps
) => {
  return (
    prevProps.currentPage === nextProps.currentPage &&
    prevProps.totalPages === nextProps.totalPages &&
    // We intentionally don't compare onPageChange function identity
    // as it would likely cause unnecessary re-renders due to parent re-renders
    true
  );
};

export default memo(PaginationControls, areEqual);
