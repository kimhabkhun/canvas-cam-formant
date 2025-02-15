import { cn } from "@/lib/utils";

//ICONS
import { FaCircle, FaSquare, FaSquareFull } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaDiamond } from "react-icons/fa6";

import { ActiveTool, Editor } from "@/features/editor/types";

import { ToolSidebarHeader } from "@/features/editor/components/tool-sidebar-header";
import { ToolSidebarClose } from "@/features/editor/components/tool-sidebar-close";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShapeTool } from "@/features/editor/components/shape-tool";

interface ShapeSidebarProps {
  editor: Editor | undefined;
  activeTool: ActiveTool;
  onChangeActiveTool: (tool: ActiveTool) => void;
}

export const ShapeSidebar = ({
  editor,
  activeTool,
  onChangeActiveTool,
}: ShapeSidebarProps) => {
  const onClose = () => {
    onChangeActiveTool("select");
  };
  return (
    <aside
      className={cn(
        "bg-white relative border-r z-[40] flex justify-center items-center",
        activeTool === "shapes" ? "visible" : "hidden"
      )}
    >
      <ScrollArea>
        <div className="p-4 space-x-3 border-b flex overflow-x-hidden">
          <ShapeTool
            onClick={() => editor?.addCircle()}
            icon={FaCircle}
            iconClassName="size-9"
          />
          <ShapeTool
            onClick={() => editor?.addSoftRectangle()}
            icon={FaSquare}
            iconClassName="size-9"
          />
          <ShapeTool
            onClick={() => editor?.addRectangle()}
            icon={FaSquareFull}
            iconClassName="size-9"
          />
          <ShapeTool
            onClick={() => editor?.addTriangle()}
            icon={IoTriangle}
            iconClassName="size-9"
          />
          <ShapeTool
            onClick={() => editor?.addInverseTriangle()}
            icon={IoTriangle}
            iconClassName="rotate-180 size-9"
          />
          <ShapeTool
            onClick={() => editor?.addDiamond()}
            icon={FaDiamond}
            iconClassName="size-9"
          />
        </div>
      </ScrollArea>
    </aside>
  );
};
