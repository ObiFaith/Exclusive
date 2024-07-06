const Breadcrumb = ({parent, page}) => {
  return (
    <div className="pt-14 lg:pt-20 flex gap-3 text-sm">
      <div className="flex gap-3 text-dark-200">
        <span>{parent}</span>
        <span>/</span>
      </div>
      <span className="text-black">{page}</span>
    </div>
  )
}

export default Breadcrumb