import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Grip } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { achievements } from "@/data/achievements";

const AchievementsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    document.body.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      document.body.style.cursor = "default";
    }
  };

  return (
    <section id="achievements" className="pt-14 bg-background/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            A collection of my professional accomplishments, awards, and
            certifications earned throughout my journey.
          </p>
        </motion.div>

        <div className="flex justify-between mb-6 space-x-2">
          <div className="flex items-center text-muted-foreground">
            <Grip className="h-4 w-4 mr-2" />
            <span className="text-sm hidden md:inline">Drag to explore</span>
            <span className="text-sm md:hidden">Swipe to explore</span>
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => scroll("left")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 space-x-6 snap-x scrollbar-hidden cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="min-w-[300px] max-w-[300px] bg-card p-6 rounded-lg shadow-sm border border-border snap-center select-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-2 rounded-full mr-3 ${
                    achievement.type === "competition"
                      ? "bg-yellow-100/80 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300"
                      : achievement.type === "academic"
                      ? "bg-blue-100/80 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                      : "bg-green-100/80 text-green-600 dark:bg-green-950 dark:text-green-300"
                  }`}
                >
                  <achievement.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-normal text-muted-foreground">
                    {achievement.year}
                  </p>
                  <h3 className="text-lg font-semibold text-foreground">
                    {achievement.title}
                  </h3>
                </div>
              </div>
              <p className="text-base font-normal text-muted-foreground mb-4">
                {achievement.description}
              </p>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  achievement.type === "competition"
                    ? "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
                    : achievement.type === "academic"
                    ? "bg-blue-100/80 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                    : "bg-green-100/80 text-green-800 dark:bg-green-950 dark:text-green-300"
                }`}
              >
                {achievement.type.charAt(0).toUpperCase() +
                  achievement.type.slice(1)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
