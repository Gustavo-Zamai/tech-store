import { HStack, Button } from "@chakra-ui/react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange
}: PaginationProps) {

  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <HStack 
        mt={2}
        justify="center" 
        gap={3}
        >

      <Button
        bgColor="blue.500"
        _hover={{bgColor:"blue.700"}}
        size="sm"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </Button>

      {pageNumbers.map((number) => (
        <Button
          bgColor="blue.500"
          _hover={{bgColor:"blue.700"}}
          key={number}
          size="sm"
          backgroundColor={currentPage === number ? "blue" : "blue.500"}
          onClick={() => onPageChange(number)}
        >
          {number}
        </Button>
      ))}

      <Button
        bgColor="blue.500"
        _hover={{bgColor:"blue.700"}}
        size="sm"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Próxima
      </Button>

    </HStack>
  )
}