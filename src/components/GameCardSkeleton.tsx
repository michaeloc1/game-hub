import { Card, Skeleton, SkeletonText } from '@chakra-ui/react'


const GameCardSkeleton = () => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={'hidden'}>
        <Skeleton height='200px' />
        <SkeletonText />
    </Card>
  )
}

export default GameCardSkeleton