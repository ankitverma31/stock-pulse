import { useEffect } from 'react'

type DocumentTitleProps = {
  title: string
}

/**
 * A custom hook that updates the document title
 * @param {DocumentTitleProps} props - The props object containing the title
 * @returns {void}
 */
const useDocumentTitle = ({ title }: DocumentTitleProps): void => {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    // Cleanup function to restore previous title when component unmounts
    return () => {
      document.title = previousTitle
    }
  }, [title])
}

export default useDocumentTitle
