import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, MapPin, Clock, Star } from "lucide-react";
import { getDestinationInfo } from "@/data/destinationInfo";

interface TourImageGalleryProps {
  images: { term: string; url: string }[];
}

const TourImageGallery = ({ images }: TourImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;
  const destinationInfo = selectedImage ? getDestinationInfo(selectedImage.term) : null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-square rounded-xl overflow-hidden shadow-soft gallery-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Shimmer loader */}
            {!loadedImages.has(index) && (
              <div className="absolute inset-0 shimmer bg-muted" />
            )}
            
            <img
              src={image.url}
              alt={image.term}
              loading="lazy"
              decoding="async"
              onLoad={() => handleImageLoad(index)}
              className={`w-full h-full object-cover transition-all duration-200 group-hover:scale-110 ${
                loadedImages.has(index) ? "opacity-100" : "opacity-0"
              }`}
            />
            
            {/* Overlay with title */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-xs font-medium line-clamp-2 text-center">
                  {image.term}
                </p>
              </div>
            </div>
            
            {/* Hover border glow */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-all duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox Dialog with Info */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
        <DialogContent className="max-w-5xl w-full p-0 bg-background/98 backdrop-blur-xl border-border/50 overflow-hidden">
          {selectedImage && destinationInfo && (
            <div className="flex flex-col lg:flex-row max-h-[90vh]">
              {/* Image Section */}
              <div className="relative lg:w-3/5 bg-black/90">
                {/* Close button */}
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="h-5 w-5 text-white" />
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Image */}
                <div className="flex items-center justify-center min-h-[300px] lg:min-h-[500px] p-4">
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.term}
                    decoding="async"
                    className="max-w-full max-h-[60vh] lg:max-h-[80vh] object-contain rounded-lg lightbox-image"
                  />
                </div>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 rounded-full">
                  <p className="text-white/80 text-sm">
                    {selectedIndex !== null ? selectedIndex + 1 : 0} / {images.length}
                  </p>
                </div>
              </div>

              {/* Info Section */}
              <div className="lg:w-2/5 p-6 overflow-y-auto max-h-[40vh] lg:max-h-[90vh] bg-background">
                <div className="space-y-5">
                  {/* Title */}
                  <div>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm font-medium">Destination</span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">
                      {destinationInfo.name}
                    </h2>
                  </div>

                  {/* Best time to visit */}
                  {destinationInfo.bestTimeToVisit && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">Best time: {destinationInfo.bestTimeToVisit}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {destinationInfo.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      Highlights
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {destinationInfo.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TourImageGallery;
