const { data, error, isLoading } = useGetPostsQuery()
console.log('Kelgan postlar:', data)
console.log('Xatolik:', error)
