namespace Domain.Frames
{
    public class FrameParams
    {
        public int? BrandId { get; set; }
        public int? CategoryId { get; set; }
        private const int PageMaxSize = 50;
        private int _pageSize = 6;
        public int PageIndex { get; set; } = 1;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (value > PageMaxSize) ? PageMaxSize : value;
        }
        private string _search;
        public string Search
        {
            get => _search;
            set => _search = value.ToLower();
        }
        public string Sort { get; set; }
    }
}