"use client";

import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

type ColumnId = "select" | "status" | "email" | "amount" | "actions";

export const columns: {
  id: ColumnId;
  label: string;
  enableSorting: boolean;
  enableHiding: boolean;
}[] = [
  { id: "select", label: "Select", enableSorting: false, enableHiding: false },
  { id: "status", label: "Status", enableSorting: false, enableHiding: true },
  { id: "email", label: "Email", enableSorting: true, enableHiding: true },
  { id: "amount", label: "Amount", enableSorting: false, enableHiding: true },
  { id: "actions", label: "Actions", enableSorting: false, enableHiding: false },
];

type SortableColumnId = "status" | "email" | "amount";

type SortState = {
  id: SortableColumnId;
  desc: boolean;
};

const PAGE_SIZE = 10;

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function FinanceDataTable() {
  const [sorting, setSorting] = React.useState<SortState | null>(null);
  const [emailFilter, setEmailFilter] = React.useState("");
  const [columnVisibility, setColumnVisibility] = React.useState<
    Partial<Record<ColumnId, boolean>>
  >({});
  const [rowSelection, setRowSelection] = React.useState<
    Record<string, boolean>
  >({});
  const [pageIndex, setPageIndex] = React.useState(0);

  const isVisible = React.useCallback(
    (id: ColumnId) => columnVisibility[id] !== false,
    [columnVisibility],
  );

  const filteredRows = React.useMemo(() => {
    const needle = emailFilter.trim().toLowerCase();
    const rows = needle
      ? data.filter((row) => row.email.toLowerCase().includes(needle))
      : data;

    if (!sorting) {
      return rows;
    }

    return [...rows].sort((a, b) => {
      const aValue = a[sorting.id];
      const bValue = b[sorting.id];
      const result =
        typeof aValue === "number" && typeof bValue === "number"
          ? aValue - bValue
          : String(aValue).localeCompare(String(bValue));

      return sorting.desc ? -result : result;
    });
  }, [emailFilter, sorting]);

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE));
  const currentPage = Math.min(pageIndex, pageCount - 1);
  const pageRows = filteredRows.slice(
    currentPage * PAGE_SIZE,
    currentPage * PAGE_SIZE + PAGE_SIZE,
  );

  const selectedRowCount = filteredRows.filter(
    (row) => rowSelection[row.id],
  ).length;
  const isAllPageRowsSelected =
    pageRows.length > 0 && pageRows.every((row) => rowSelection[row.id]);
  const isSomePageRowsSelected =
    !isAllPageRowsSelected && pageRows.some((row) => rowSelection[row.id]);

  const toggleSorting = (id: SortableColumnId) => {
    setSorting((previous) =>
      previous && previous.id === id && !previous.desc
        ? { id, desc: true }
        : { id, desc: false },
    );
    setPageIndex(0);
  };

  const toggleRowSelected = (id: string, selected: boolean) => {
    setRowSelection((previous) => {
      const next = { ...previous };
      if (selected) {
        next[id] = true;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const toggleAllPageRowsSelected = (selected: boolean) => {
    setRowSelection((previous) => {
      const next = { ...previous };
      for (const row of pageRows) {
        if (selected) {
          next[row.id] = true;
        } else {
          delete next[row.id];
        }
      }
      return next;
    });
  };

  const toggleColumnVisibility = (id: ColumnId) => {
    setColumnVisibility((previous) => {
      const next = { ...previous };
      next[id] = previous[id] === false;
      return next;
    });
  };

  const canPreviousPage = currentPage > 0;
  const canNextPage = currentPage < pageCount - 1;

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={emailFilter}
          onChange={(event) => {
            setEmailFilter(event.target.value);
            setPageIndex(0);
          }}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {columns
              .filter((column) => column.enableHiding)
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={isVisible(column.id)}
                  onCheckedChange={() => toggleColumnVisibility(column.id)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox
                  checked={
                    isAllPageRowsSelected ||
                    (isSomePageRowsSelected && "indeterminate")
                  }
                  onCheckedChange={(value) =>
                    toggleAllPageRowsSelected(!!value)
                  }
                  aria-label="Select all"
                />
              </TableHead>
              {isVisible("status") && <TableHead>Status</TableHead>}
              {isVisible("email") && (
                <TableHead>
                  <Button
                    variant="ghost"
                    onClick={() => toggleSorting("email")}
                  >
                    Email
                    <ArrowUpDown />
                  </Button>
                </TableHead>
              )}
              {isVisible("amount") && (
                <TableHead>
                  <div className="text-right">Amount</div>
                </TableHead>
              )}
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {pageRows.length > 0 ? (
              pageRows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={rowSelection[row.id] ? "selected" : undefined}
                >
                  <TableCell>
                    <Checkbox
                      checked={!!rowSelection[row.id]}
                      onCheckedChange={(value) =>
                        toggleRowSelected(row.id, !!value)
                      }
                      aria-label="Select row"
                    />
                  </TableCell>
                  {isVisible("status") && (
                    <TableCell>
                      <div className="capitalize">{row.status}</div>
                    </TableCell>
                  )}
                  {isVisible("email") && (
                    <TableCell>
                      <div className="lowercase">{row.email}</div>
                    </TableCell>
                  )}
                  {isVisible("amount") && (
                    <TableCell>
                      <div className="text-right font-medium">
                        {currencyFormatter.format(row.amount)}
                      </div>
                    </TableCell>
                  )}
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                          onClick={() =>
                            navigator.clipboard.writeText(row.id)
                          }
                        >
                          Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-muted-foreground text-sm">
          {selectedRowCount} of {filteredRows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPageIndex((index) => Math.max(0, index - 1))}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setPageIndex((index) => Math.min(pageCount - 1, index + 1))
            }
            disabled={!canNextPage}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
